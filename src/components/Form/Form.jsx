import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Checkbox,
  Checklabel,
  ErrorMessage,
  FormWrapper,
  Input,
  InputWrapper,
  Textarea,
} from './styles';

const Form = ({ handleAddInfo }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm({ defaultValues: { checkbox: false } });

  const [isChecked, setChecked] = useState(false);

  const handleOnChange = (e) => {
    setChecked(!isChecked);
  };

  const onSubmit = async (data) => {
    const response = await fetch(data.url, {
      method: 'HEAD',
    });

    if (response.headers.get('Content-Type').startsWith('image/')) {
      console.log(data.title);

      const temp = {
        title: data.title,
        url: data.url,
        description: data.description,
      };

      handleAddInfo(temp);
      setChecked(false);
      reset();
    } else {
      setError('url', {
        type: 'content-type error',
        message: 'Ошибка: ссылка не содержит изображение',
      });
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Название фото"
          {...register('title', { required: true, maxLength: 0 })}
        />
        <Input
          type="text"
          placeholder="Ссылка на фото"
          {...register('url', {
            required: {
              value: true,
              message: 'Введите url',
            },
          })}
        />
        <div>
          {errors?.title && (
            <ErrorMessage>
              {errors?.title?.message || 'Допустимая длина ввода 20 символов'}
            </ErrorMessage>
          )}
        </div>
        <div>
          {errors.url && <ErrorMessage>{errors.url.message}</ErrorMessage>}
        </div>

        <Checkbox>
          <input
            type="checkbox"
            id="checkbox1"
            className="form-check-input"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <Checklabel>Есть описание?</Checklabel>
        </Checkbox>
        {isChecked && (
          <Textarea
            {...register('description', {
              required: 'Обязательное поле',
              maxLength: 50,
              pattern: /^[a-z0-9\s]+$/i,
            })}
            placeholder="Добавьте описание к фото"
            error={errors?.description}
          ></Textarea>
        )}
      </InputWrapper>
      <Button type="submit"> Добавить фото </Button>
    </FormWrapper>
  );
};

export default Form;
