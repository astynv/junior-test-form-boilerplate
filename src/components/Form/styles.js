import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin-top: 10px;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Input = styled.input`
  font-family: 'Inter';
  outline: none;
  border: none;
  resize: none;
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  height: 40px;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 400;
  border: 1px solid #bfbfbf;
  &:active,
  ::placeholder {
    font-family: 'Inter';
    outline: none;
    font-size: 15px;
  }
`;

export const Button = styled.button`
  font-family: 'Inter';
  background-color: #474cc0;
  min-height: 40px;
  color: white;
  margin: 5px;
  border: 1px solid black;
  border-radius: 5px;
  min-width: 100px;
`;

export const Textarea = styled.textarea`
  font-family: 'Inter';
  outline: none;
  border: none;
  resize: none;
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  height: 100px;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 400;
  border: 1px solid #bfbfbf;
  &:active,
  ::placeholder {
    font-family: 'Inter';
    outline: none;
    font-size: 15px;
  }
`;

export const ErrorMessage = styled.div`
  margin: 5px;
  color: red;
`;

export const Checkbox = styled.div`
  padding: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Checklabel = styled.label`
  font-family: 'Inter';
  font-size: 15px;
`;
