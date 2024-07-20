import { ChangeEvent, FC, useId, useReducer, useState } from 'react';
import { blankImage, InputProps } from '../common';
import Title from '../Shared/Title/Title';

import './_file.scss';

const Image: FC<InputProps> = ({ title, required }) => {
  const id = useId();
  const [imageUrl, setImageUrl] = useState(blankImage);
  const [hasImage, toggleHasImage] = useReducer(
    (bool: boolean) => !bool,
    false
  );

  const updatePreview = (ev: ChangeEvent) => {
    ev.preventDefault();
    const elem = ev.currentTarget as HTMLInputElement;
    if (!elem || !elem.files?.length) {
      // has at least 1 file
      if (hasImage) toggleHasImage();
      setImageUrl(blankImage);
      return;
    }
    const file = elem.files!.item(0);
    if (!file) {
      // double check: file object is returned
      if (hasImage) toggleHasImage();
      setImageUrl(blankImage);
      return;
    }
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    if (!hasImage) toggleHasImage();
  };

  return (
    <div className="admin-input__image">
      <Title text={title} required={required} />
      <div className="preview-container">
        <label
          htmlFor={id}
          className={`image-message ${hasImage ? 'hidden' : ''}`}
        >
          {hasImage ? 'Editar' : 'Selecionar'}
        </label>
        <input
          type="file"
          id={id}
          className="image-input"
          multiple={false}
          onChange={updatePreview}
          style={{ visibility: 'hidden' }}
        />
        <img src={imageUrl} className="image-preview" />
      </div>
    </div>
  );
};

export default Image;
