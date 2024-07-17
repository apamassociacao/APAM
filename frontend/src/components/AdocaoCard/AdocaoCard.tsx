import { FC } from 'react';
import './_adocaoCard.scss';

interface AdocaoCardProps {
  titulo: string;
  idade: number;
  imageUrl?: string;
}

const AdocaoCard: FC<AdocaoCardProps> = ({ titulo, idade, imageUrl }) => {
  return (
    <div className="adocaocard">
      <img className="adocaocard__animal-photo" src={imageUrl} />
      <div className="adocaocard__bottom-container">
        <div className="adocaocard__info-container">
          <p className="adocaocard__animal-name">{titulo}</p>
          <p className="adocaocard__animal-age">
            {idade <= 1 ? '1 Ano' : `${idade} Anos`}
          </p>
        </div>
        <img className="adocaocard__paw-icon" src="/images/fa-paw.png" />
      </div>
    </div>
  );
};
export default AdocaoCard;
