import classNames from 'classnames';
import React from 'react';

import * as Classes from '../../../common/classes';
import { withTheme, ThemeProps } from '../../../theme';
import './TextInput.scss';

export const UNDERLINE_FROM_CENTER = 'center';
export const UNDERLINE_FROM_LEFT = 'left';
export const UNDERLINE_NONE = 'none';

export interface TextInputProps {
  /**
   * Placeholder for text input.
   * If undefined, then the placeholder and label won't be rendered.
   * @default ''
   */
  placeholder?: string;

  /**
   * Style hat will be injected to input text wrapper.
   * @default {}
   */
  wrapperStyle?: React.CSSProperties;

  /**
   * Direction of the underline animation.
   * If set to none, the underline won't be rendered.
   * @default center
   */
  underlineAnimation?: 'center' | 'left' | 'none';

  /**
   * Short text to help user filling the input.
   * @default undefined
   */
  helpText?: string;
};

type ThemedTextInputProps = TextInputProps & ThemeProps & React.HTMLAttributes<HTMLInputElement>;

const CLASS_WRAPPER = `${Classes.NS}-text-input-wrapper`;
const CLASS_LABEL = `${Classes.NS}-text-input-label`;
const CLASS_HELP_TEXT = `${Classes.NS}-text-input-help-text`;
const CLASS_UNDERLINE = `${Classes.NS}-text-input-underline`;
const CLASS_UNDERLINE_FROM_CENTER = `${Classes.NS}-from-center`;

export const TextInput: React.FunctionComponent<ThemedTextInputProps> = (props) => {
  const { className, theme, placeholder, wrapperStyle, underlineAnimation, helpText, ...htmlProps } = props;
  const classes = classNames(
    Classes.TEXT_INPUT,
    className,
  );
  const underlineClasses = classNames(
    CLASS_UNDERLINE,
    { [CLASS_UNDERLINE_FROM_CENTER]: (underlineAnimation === UNDERLINE_FROM_CENTER) }
  );

  const inputStyle = { fontSize: theme.fontSize, fontFamily: theme.primaryFont };
  const underlineStyle = { backgroundColor: theme.primaryColor };
  const showUnderline = (underlineAnimation !== UNDERLINE_NONE);

  return (
    <div className={CLASS_WRAPPER} style={wrapperStyle}>
      <input className={classes} type="text" placeholder={placeholder} style={inputStyle} {...htmlProps} />
      { placeholder && (<label className={CLASS_LABEL}>{placeholder}</label>) }
      { showUnderline && (<div className={underlineClasses} style={underlineStyle} />) }
      { !!helpText && (<small className={CLASS_HELP_TEXT}>{helpText}</small>) }
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: '',
  wrapperStyle: {},
  underlineAnimation: UNDERLINE_FROM_CENTER,
  helpText: undefined,
};

export default withTheme<ThemedTextInputProps>(TextInput);
