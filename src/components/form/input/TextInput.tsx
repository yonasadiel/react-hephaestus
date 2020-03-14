import { css } from 'aphrodite/no-important';
import React from 'react';

import { withTheme, ThemeProps } from '../../../common/theme';
import styles from './styles';

export const UNDERLINE_FROM_CENTER = 'center';
export const UNDERLINE_FROM_LEFT = 'left';
export const UNDERLINE_NONE = 'none';

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
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

  /**
   * Error text that indicates the error of current field.
   * @default undefined
   */
  errorText?: string;
};

const TextInput: React.FunctionComponent<TextInputProps & ThemeProps> = (props) => {
  const {
    className,
    tStyles,
    placeholder,
    underlineAnimation,
    wrapperStyle,
    helpText,
    errorText,
    ...htmlProps
  } = props;

  const inputClass = css(
    styles.input,
    tStyles.fontSizeRegular,
  );
  const classNames = `${inputClass} ${className}`

  const underlineClass = css(
    tStyles.bgColorPrimary,
    (underlineAnimation === UNDERLINE_FROM_CENTER) && styles.underlineFromCenter,
    (underlineAnimation === UNDERLINE_FROM_LEFT) && styles.underlineFromLeft,
  );

  const wrapperClass = css(styles.wrapper);
  const labelClass = css(styles.label);
  const helpTextClass = css(styles.helpText);
  const errorTextClass = css(styles.errorText);

  const showUnderline = (underlineAnimation !== UNDERLINE_NONE);

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <input className={classNames} type="text" placeholder={placeholder} {...htmlProps} />
      { placeholder && (<label className={labelClass}>{placeholder}</label>) }
      { showUnderline && (<div className={underlineClass} />) }
      { !!helpText && (<small className={helpTextClass}>{helpText}</small>) }
      { !!errorText && (<small className={errorTextClass}>{errorText}</small>) }
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: '',
  wrapperStyle: {},
  underlineAnimation: UNDERLINE_FROM_CENTER,
  helpText: undefined,
  errorText: undefined,
};

export default withTheme<TextInputProps>(TextInput);
