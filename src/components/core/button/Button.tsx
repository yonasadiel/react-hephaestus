import classNames from 'classnames';
import React from 'react';

import * as Classes from '../../../common/classes';
import { ThemeProps, withTheme } from '../../../theme';
import './Button.scss';

const BUTTON_TYPE_CONTAINED = 'contained';
const BUTTON_TYPE_OUTLINED = 'outlined';

type ButtonType = 'contained' | 'outlined' | 'text';

export interface ButtonProps {
  buttonType?: ButtonType;
};

type ThemedButtonProps = ButtonProps & ThemeProps & React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FunctionComponent<ThemedButtonProps> = (props) => {
  const {
    className,
    buttonType,
    theme,
    style: styleProps,
    ...htmlProps
  } = props;

  const classes = classNames(
    Classes.BUTTON,
    { [Classes.ELEVATED]: (buttonType === BUTTON_TYPE_CONTAINED) },
    className,
  );

  const buttonStyle = {
    backgroundColor: (buttonType === BUTTON_TYPE_CONTAINED ? theme.primaryColor : 'transparent'),
    borderColor: theme.primaryColor,
    borderWidth: (buttonType === BUTTON_TYPE_OUTLINED ? 1 : 0),
    borderRadius: theme.borderRadius,
    color: (buttonType === BUTTON_TYPE_CONTAINED ? '#ffffff' : theme.primaryColor),
    ...styleProps,
  };
  return <button className={classes} style={buttonStyle} type="button" {...htmlProps} />;
};

Button.defaultProps = {
  buttonType: BUTTON_TYPE_CONTAINED,
};

export default withTheme<ThemedButtonProps>(Button);
