import iconReceita from '../../../public/images/iconReceitaTransparencia.svg';
import iconDespesa from '../../../public/images/iconDespesaTransparencia.svg';
import iconAvailable from '../../../public/images/carbon_dog-walker.svg';
import iconSucess from '../../../public/images/bi_house-heart.svg';
import iconRescued from '../../../public/images/material-symbols_heart-plus-outline.svg';
import iconTreatment from '../../../public/images/pajamas_status-health.svg';

import './_transparency.scss';

const Transparency: React.FC = () => {
  const valorReceita = '10.000,00';
  const valorDespesa = '5.283,25';

  return (
    <section className="transparency">
      <div className="transparency__container">
        <div className="transparency__container__header">
          <h2>Transparência</h2>
        </div>
        <div className="transparency__container__body">
          <div className="transparency__container__body-top">
            <div className="transparency__container__body-top-card cards">
              <div className="container__image receitas">
                <img src={iconReceita} alt="Icone de livro aberto" />
              </div>
              <div className="transparency__container__body-top-card--text">
                <h4>Receita 2023</h4>
                <span>R${valorReceita}</span>
                <a>Ver mais detalhes</a>
              </div>
            </div>

            <div className="transparency__container__body-top-card cards">
              <div className="container__image despesas">
                <img src={iconDespesa} alt="Icone de calculadora" />
              </div>
              <div className="transparency__container__body-top-card--text">
                <h4>Despesa 2023</h4>
                <span>R${valorDespesa}</span>
                <a>Ver mais detalhes</a>
              </div>
            </div>
          </div>
          <div className="transparency__container__body-bottom">
            <div className="transparency__container__body-bottom-card cards">
              <div className="container__image resgate">
                <img src={iconRescued} alt="Icone de coração" />
              </div>
              <span>253</span>
              <p>Animais resgatados</p>
            </div>

            <div className="transparency__container__body-bottom-card cards">
              <div className="container__image tratamento">
                <img src={iconTreatment} alt="Icone de batimento cardiaco" />
              </div>
              <span>23</span>
              <p>Animais em tratamento</p>
            </div>

            <div className="transparency__container__body-bottom-card cards">
              <div className="container__image sucesso">
                <img src={iconSucess} alt="Icone de casa com coracao no meio" />
              </div>
              <span>79</span>
              <p>Casos de sucesso</p>
            </div>

            <div className="transparency__container__body-bottom-card cards">
              <div className="container__image adocao">
                <img
                  src={iconAvailable}
                  alt="Icone de um ser humano com um animal"
                />
              </div>
              <span>113</span>
              <p>Disponíveis para adoção</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
