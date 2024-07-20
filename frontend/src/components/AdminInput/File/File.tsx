import { ChangeEvent, FC, useId, useReducer, useState } from 'react';
import { InputProps } from '../common';
import Title from '../Shared/Title/Title';

const File: FC<InputProps> = ({ title, required }) => {
  const id = useId();
  const [filename, setFilename] = useState('');
  const [hasFile, toggleHasFile] = useReducer((bool: boolean) => !bool, false);

  const updateFileName = (ev: ChangeEvent) => {
    const elem = ev.currentTarget as HTMLInputElement;
    if (!elem || !elem.files?.length) {
      if (hasFile) toggleHasFile();
      setFilename('');
      return;
    }
    const file = elem.files?.item?.(0);
    if (!file) {
      if (hasFile) toggleHasFile();
      setFilename('');
      return;
    }
    setFilename(file.name);
    if (!hasFile) toggleHasFile();
  };

  return (
    <div className="admin-input__file">
      <Title text={title} required={required} />
      <div className="choose">
        <div className="choose-button">
          <label htmlFor={id} className="choose-button-text">
            {hasFile ? 'Editar Arquivo' : 'Selecionar Arquivo'}
          </label>
          <input
            id={id}
            type="file"
            onChange={updateFileName}
            multiple={false}
            style={{ visibility: 'hidden' }}
          />
        </div>
        <label className="filename-label">{filename}</label>
      </div>
    </div>
  );
};

export default File;
