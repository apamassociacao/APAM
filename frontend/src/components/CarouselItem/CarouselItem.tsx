import { FC } from 'react';
import './_carouselItem.scss';

interface CarouselItemProps {
  imgUrl: string;
  imgTitle: string;
}

const CarouselItem: FC<CarouselItemProps> = ({ imgUrl, imgTitle }) => {
  return (
    <div className="carousel__card">
      <img src={imgUrl} alt={imgTitle} />
    </div>
  );
};

export default CarouselItem;
