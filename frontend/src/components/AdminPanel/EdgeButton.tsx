import { FC, HTMLAttributes, type ReactElement } from 'react';

type RedactedAttributes = Omit<
  HTMLAttributes<HTMLButtonElement>,
  'className' | 'style'
>;

interface EdgeButtonProps extends RedactedAttributes {
  text: string;
}

const EdgeButton: FC<EdgeButtonProps> = ({ text, ...rest }) => {
  return (
    <button {...rest} className="admin-panel__edge-btn">
      {text}
    </button>
  );
};

export type EdgeButtonInstance = ReactElement<EdgeButtonProps, 'EdgeButton'>;

export default EdgeButton;
