import { FC, ReactElement } from 'react';

import './_admin-form-layout.scss';

interface AdminFormLayoutProps {
  rows: ReactElement[][];
  sideElement?: ReactElement;
}

const AdminFormLayout: FC<AdminFormLayoutProps> = ({ rows, sideElement }) => {
  const containers = rows.map((elements: ReactElement[]) => {
    if (elements.length < 1 || elements.length > 2)
      throw new TypeError(
        'Form element group (array) must be contain either 1 or 2 elements'
      );
    return (
      <div key={crypto.randomUUID()} className="input-group">
        {elements}
      </div>
    );
  });

  return (
    <div className="admin-input__form-layout">
      <div className="form-inputs">
        <div className="main-inputs">{containers}</div>
        <div className="side-panel">{sideElement}</div>
      </div>
      <div className="form-submit">
        <button className="button-cancel" type="button">
          Cancelar
        </button>
        <button className="button-submit" type="button">
          Enviar Informações
        </button>
      </div>
    </div>
  );
};

export default AdminFormLayout;
