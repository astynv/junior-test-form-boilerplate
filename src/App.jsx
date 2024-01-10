import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';

import Form from './components/Form/Form';
import ImageList from './components/ImageList/ImageList';
import './App.css';

const initialState = {
  id: '',
  url: '',
  title: '',
  date: '',
  description: '',
};

function App() {
  const ACCESS_KEY = 'cZA6cWj2ZFTfwUBBhTOcUTPLBC5qnZa_dtBHEk0c8FM';
  const picsNumber = 5;
  const [pics, setPics] = useState([initialState]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=${picsNumber}&orientation=landscape&query=`,
      );
      const data = await response.data;
      const temp = data.map((item) => {
        return {
          id: item.id,
          url: item.urls.regular,
          title: item.alt_description,
          date: new Date(item.created_at).toLocaleDateString(),
          description: item.alt_description,
        };
      });

      setPics(temp);
      console.log(temp);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteImage = (id) => {
    const newPics = pics.filter((image) => image.id !== id);

    setPics(newPics);
  };

  const addInfo = (data) => {
    const date = new Date();
    const newPics = {
      id: nanoid(),
      url: data.url,
      title: data.title,
      date: date.toLocaleDateString(),
      description: data.description,
    };
    const newPicsState = [...pics, newPics];

    setPics(newPicsState);
  };

  return (
    <div className="App">
      <Form handleAddInfo={addInfo} />
      <ImageList images={pics} handleDeleteImage={deleteImage} />
    </div>
  );
}

export default App;
