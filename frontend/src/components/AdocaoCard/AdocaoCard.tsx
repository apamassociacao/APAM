import './_adocaoCard.scss';

interface AdocaoCardProps {
  titulo: string;
  idade: string;
  id?: number;
  imageUrl?: string;
}

const AdocaoCard = ({ titulo, idade, imageUrl }: AdocaoCardProps) => {
  return (
    <div className="adocaocard">
      <div className="adocaocard__container__img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="adocaocard__container__item">
        <div className="adocaocard__container__item2">
          <p className="adocaocard__container__item__title adocaocard__container__item__title2">
            {' '}
            {titulo}
          </p>
          <p className="adocaocard__container__item__title adocaocard__container__item__title3">
            {' '}
            {idade}
          </p>
        </div>
        <span className="adocaocard__container__icon">
          <img src="/public/images/fa-paw.png" alt="" />
        </span>
      </div>
    </div>
  );
};
export default AdocaoCard;
