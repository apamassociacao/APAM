import './_aboutUs.scss';

const AboutUs: React.FC = () => (
  <section className="about-us">
    <div className="about-us__container">
      <div className="about-us__container__imgs">
        <img src="/images/dog1.png" alt="Cachorro com lingua pra fora" />
        <img src="/images/cat1.png" alt="Gato dourado deitado" />
      </div>
      <div className="about-us__container__body">
        <div className="about-us__container__body__left">
          <h2>Quem somos</h2>
          <p>
            Somos a{' '}
            <span>Associação Protetora dos Animais de Mato Grosso (APAM)</span>,
            uma organização dedicada ao resgate, cuidado e adoção de animais em
            situações vulneráveis. Nossa missão é proporcionar um lar seguro e
            amoroso para cada ser que cruzar nosso caminho.
          </p>
        </div>
        <div className="about-us__container__body__rigth">
          <h2>Nossa missão</h2>
          <p>Além do resgate e do incentivo a adoção, nós também:</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
