import classnames from 'classnames';
import React from 'react';

import * as cStyles from '../../../common/styles/';
import { InjectedThemeProps } from '../../../common/provider/theme';
import { withHephaestusContext } from '../../../common/provider/';
import './TextInput.scss';

export const UNDERLINE_FROM_CENTER = 'center';
export const UNDERLINE_FROM_LEFT = 'left';
export const UNDERLINE_NONE = 'none';

export type UnderlineAnimation = 'center' | 'left' | 'none';

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
  underlineAnimation?: UnderlineAnimation;

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

const TextInput: React.FunctionComponent<TextInputProps & InjectedThemeProps> = (props) => {
  const {
    className,
    theme,
    placeholder,
    underlineAnimation,
    wrapperStyle,
    helpText,
    errorText,
    ...htmlProps
  } = props;

  const inputClass = classnames(
    theme.fontSizeRegular,
    className,
  );

  const underlineClass = classnames(
    'underline',
    theme.bgColorPrimary,
    (underlineAnimation === UNDERLINE_FROM_CENTER) && 'from-center',
    (underlineAnimation === UNDERLINE_FROM_LEFT) && 'from-left',
  );

  const wrapperClass = classnames(`${cStyles.ns}-input`, 'wrapper');

  const showUnderline = (underlineAnimation !== UNDERLINE_NONE);

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <input className={inputClass} type="text" placeholder={placeholder} {...htmlProps} />
      { placeholder && (<label>{placeholder}</label>) }
      { showUnderline && (<div className={underlineClass} />) }
      { !!helpText && (<small className='help'>{helpText}</small>) }
      { !!errorText && (<small className='error'>{errorText}</small>) }
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

export default withHephaestusContext<TextInputProps>(TextInput);
