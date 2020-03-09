import { css } from 'aphrodite/no-important';
import React from 'react';

import hStyles from '../../../common/styles';
import { ThemeProps, withTheme } from '../../../common/theme';
import styles from './styles';

export const BUTTON_TYPE_CONTAINED = 'contained';
export const BUTTON_TYPE_OUTLINED = 'outlined';
export const BUTTON_TYPE_TEXT = 'text';

type ButtonType = 'contained' | 'outlined' | 'text';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
};

const Button: React.FunctionComponent<ButtonProps & ThemeProps> = (props) => {
  const {
    buttonType,
    className,
    tStyles,
    ...htmlProps
  } = props;

  const buttonClass = css(
    styles.buttonStyles,
    (buttonType === BUTTON_TYPE_CONTAINED) && hStyles.elevated,
    (buttonType === BUTTON_TYPE_OUTLINED) && hStyles.outlined,

    tStyles.borderColorPrimary,
    (buttonType === BUTTON_TYPE_CONTAINED) && tStyles.bgColorPrimary,
    (buttonType !== BUTTON_TYPE_CONTAINED) && tStyles.colorPrimary,
  );

  const classNames = `${buttonClass} ${className}`;

  return <button className={classNames} {...htmlProps} />;
};

Button.defaultProps = {
  buttonType: BUTTON_TYPE_CONTAINED,
};

export default withTheme<ButtonProps>(Button);
