import Header from '@/components/Header/Header.tsx';

import './_helpUs.scss';
import Button from '@/components/Button/Button.tsx';

const HelpUs = () => (
  <section className="help-us">
    <div className="help-us__container">
      <Header />

      <div className="help-us__container__body">
        <div className="help-us__container__body__left">
          <h1 className="help-us__container__body__left__title">
            Ajude-nos a mudar a vida deles
          </h1>
          <p className="help-us__container__body__left__subtitle">
            Somos uma família multiespécie, com a lealdade de um vira-lata
            caramelo, a vivacidade de um frajola e a humanidade de quem quer
            reunir novas famílias e faz tudo o que é possível pela causa animal.
          </p>

          <div className="help-us__container__body__left__wrapper-button">
            <Button className="help-us__container__body__left__wrapper-button__donate">
              Doar
            </Button>
            <Button className="help-us__container__body__left__wrapper-button__adopt">
              Adote
            </Button>
          </div>
        </div>

        <div className="help-us__container__body__right">
          <div className="help-us__container__body__right__img"></div>
        </div>
      </div>
    </div>
  </section>
);

export default HelpUs;
