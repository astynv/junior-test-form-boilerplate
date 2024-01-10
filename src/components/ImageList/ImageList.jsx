import ImageListItem from '../ImageListItem/ImageListItem';

import { ImageListWrapper } from './styles';

const ImageList = ({ images, handleDeleteImage }) => {
  return (
    <ImageListWrapper>
      {images.map((i) => (
        <ImageListItem
          key={i.id}
          title={i.title}
          url={i.url}
          id={i.id}
          date={i.date}
          description={i.description}
          handleDeleteImage={handleDeleteImage}
        />
      ))}
    </ImageListWrapper>
  );
};

export default ImageList;
