import IconCalendar from '/images/calendarIcon.svg';
import './_campaign.scss';

const Campaign: React.FC = () => {
  const dataInicio = '01/05/2024';
  const dataFim = '18/05/2024';

  const valorReceita = '1.000,00';
  const valorDespesa = '1.000,00';

  return (
    <section className="campaign">
      <div className="campaign__container">
        <h2>Campanhas</h2>
        <div className="campaign__container__menu">
          <h3>Busque por categoria:</h3>
          <div className="campaign__container__menu-btn">
            <span>Atual</span>
            <span>Última</span>
            <span>Anterior</span>
          </div>
        </div>

        <div className="campaign__container__body">
          <div className="campaign__container__body__left">
            <img src={IconCalendar} alt="Icone de Calendário" />
          </div>
          <div className="campaign__container__body__right">
            <div className="campaign__container__body__right-header">
              <div>
                <h3>AÇÃO SOLIDÁRIA</h3>
                <h4>Em prol dos abrigos apam</h4>
              </div>
              <div>
                <p>
                  <span>Início:</span> {dataInicio}
                </p>
                <p>
                  <span>Fim:</span> {dataFim}
                </p>
              </div>
            </div>

            <div className="campaign__container__body__right-content">
              <p>
                Esta é a primeira ação solidária para arrecadar recursos que
                realizamos em 2024! O valor está super acessível, por apenas 10
                reais!!!
              </p>

              <p>
                São diversos prêmios que valem a pena adquirir para ajudar a
                APAM!
              </p>

              <p>
                🤝 Sua colaboração para manter os serviços e cuidados com os
                nossos peludinhos resgatados é muito importante!
              </p>
            </div>

            <div className="campaign__container__body__right-footer">
              <div>
                <h4>Receita</h4>
                <span>R${valorReceita}</span>
                <a>Ver mais detalhes</a>
              </div>

              <div>
                <h4>Despesas</h4>
                <span>R${valorDespesa}</span>
                <a>Ver mais detalhes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
