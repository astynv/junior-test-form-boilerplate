import React, { useState } from 'react';

import {
  BackItem,
  CardContent,
  Date,
  Delete,
  Description,
  Flip,
  Footer,
  FooterIcons,
  FrontItem,
  Image,
  Title,
} from './styles';

const ImageListItem = ({
  title,
  url,
  id,
  date,
  description,
  handleDeleteImage,
}) => {
  const [isFlipped, setFlipped] = useState('False');
  const handleFlipMode = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      {isFlipped ? (
        <FrontItem>
          <Image src={url}></Image>
          <CardContent>
            <Title>{title}</Title>
            <Footer>
              <Date>Дата добавления: {date}</Date>
              <FooterIcons>
                <Delete onClick={() => handleDeleteImage(id)} />
                <Flip onClick={() => handleFlipMode()} />
              </FooterIcons>
            </Footer>
          </CardContent>
        </FrontItem>
      ) : (
        <BackItem>
          <CardContent>
            <Description>{description}</Description>
            <Title>{title}</Title>
            <Footer>
              <Date>Дата добавления: {date}</Date>
              <FooterIcons>
                <Delete onClick={() => handleDeleteImage(id)} />
                <Flip onClick={() => handleFlipMode()} />
              </FooterIcons>
            </Footer>
          </CardContent>
        </BackItem>
      )}
    </>
  );
};

export default ImageListItem;
