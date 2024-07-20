// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import './_footer.scss';
import CarouselItem from '../CarouselItem/CarouselItem';
import { cardDetails } from '../CarouselItem/carousel-config';

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__container__header">
          <h2>Nossos Parceiros</h2>
        </div>
        <div className="footer__container__body">
          {Object.keys(cardDetails).map((key) => {
            return (
              <CarouselItem
                key={key}
                imgUrl={cardDetails[key].imgUrl}
                imgTitle={cardDetails[key].imgTitle}
              />
            );
          })}
          {Object.keys(cardDetails).map((key) => {
            return (
              <CarouselItem
                key={key}
                imgUrl={cardDetails[key].imgUrl}
                imgTitle={cardDetails[key].imgTitle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
