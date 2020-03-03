import classNames from 'classnames';
import React from 'react';

import * as Classes from '../../../common/classes';
import { withTheme, ThemeProps } from '../../../theme';
import './TextInput.scss';

export interface TextInputProps {
  placeholder?: string;
};

type ThemedTextInputProps = TextInputProps & ThemeProps & React.HTMLAttributes<HTMLInputElement>;

const CLASS_WRAPPER = `${Classes.NS}-text-input-wrapper`;
const CLASS_LABEL = `${Classes.NS}-text-input-label`;
const CLASS_UNDERLINE = `${Classes.NS}-text-input-underline`;

export const TextInput: React.FunctionComponent<ThemedTextInputProps> = (props) => {
  const { className, theme, placeholder, ...htmlProps } = props;
  const classes = classNames(
    Classes.TEXT_INPUT,
    className,
  );

  const inputStyle = { fontSize: theme.fontSize };
  const underlineStyle = { backgroundColor: theme.primaryColor };

  return (
    <div className={CLASS_WRAPPER}>
      <input className={classes} type="text" placeholder={placeholder} style={inputStyle} {...htmlProps} />
      <label className={CLASS_LABEL}>{placeholder}</label>
      <div className={CLASS_UNDERLINE} style={underlineStyle} />
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: '',
};

export default withTheme<ThemedTextInputProps>(TextInput);
