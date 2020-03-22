import classnames from 'classnames';
import React from 'react';

import * as cStyles from '../../../common/styles/';
import { InjectedThemeProps } from '../../../common/provider/theme';
import { withHephaestusContext } from '../../../common/provider/';
import './Button.scss';

export const BUTTON_TYPE_CONTAINED = 'contained';
export const BUTTON_TYPE_OUTLINED = 'outlined';
export const BUTTON_TYPE_TEXT = 'text';

export type ButtonType = 'contained' | 'outlined' | 'text';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
};

const Button: React.FunctionComponent<ButtonProps & InjectedThemeProps> = (props) => {
  const {
    buttonType,
    className,
    theme,
    ...htmlProps
  } = props;

  const buttonClass = classnames(
    `${cStyles.ns}-button`,
    buttonType,
    theme.borderColorPrimary,
    (buttonType === BUTTON_TYPE_CONTAINED) && theme.bgColorPrimary,
    (buttonType !== BUTTON_TYPE_CONTAINED) && theme.colorPrimary,
    className,
  );

  return <button className={buttonClass} {...htmlProps} />;
};

Button.defaultProps = {
  buttonType: BUTTON_TYPE_CONTAINED,
};

export default withHephaestusContext<ButtonProps>(Button);
