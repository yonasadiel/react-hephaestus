import React from 'react';

export interface Theme {
  primaryColor?: string;
  accentColor?: string;
  textColor?: string;
  foregroundColor?: string;
  backgroundColor?: string;
  hoverColor?: string;

  borderRadius?: number;

  primaryFont?: string;
  accentFont?: string;

  fontSize?: number;
  fontSizeLarge?: number;
  fontSizeSmall?: number;
};

const defaultTheme: Theme = {
  primaryColor: '#000000',
  accentColor: '#0000b3',
  textColor: '#000000',
  foregroundColor: '#ffffff',
  backgroundColor: '#f0f0f0',
  hoverColor: '#f0f0f0',

  borderRadius: 5,

  primaryFont: `'Roboto', 'Ubuntu', 'Open Sans', 'Helvetica Neue', sans-serif`,
  accentFont: `'Roboto', 'Ubuntu', 'Open Sans', 'Helvetica Neue', sans-serif`,

  fontSize: 14,
  fontSizeLarge: 16,
  fontSizeSmall: 12,
};

const ThemeContext = React.createContext(defaultTheme);

const getTheme = (providedTheme: Theme) => {
  const theme: Theme = {
    primaryColor: providedTheme.primaryColor || defaultTheme.primaryColor,
    accentColor: providedTheme.accentColor || defaultTheme.accentColor,
    textColor: providedTheme.textColor || defaultTheme.textColor,
    foregroundColor: providedTheme.foregroundColor || defaultTheme.foregroundColor,
    backgroundColor: providedTheme.backgroundColor || defaultTheme.backgroundColor,
    hoverColor: providedTheme.hoverColor || defaultTheme.hoverColor,

    borderRadius: providedTheme.borderRadius || defaultTheme.borderRadius,

    primaryFont: providedTheme.primaryFont || defaultTheme.primaryFont,
    accentFont: providedTheme.accentFont || defaultTheme.accentFont,

    fontSize: providedTheme.fontSize || defaultTheme.fontSize,
    fontSizeLarge: providedTheme.fontSizeLarge || defaultTheme.fontSizeLarge,
    fontSizeSmall: providedTheme.fontSizeSmall || defaultTheme.fontSizeSmall,
  };
  return theme;
}

export default ThemeContext.Provider;

export interface ThemeProps {
  /**
   * Provided theme from ThemeProvider.
   * Will use default theme if not present.
   */
  theme: Theme;
};

export const withTheme = <P extends object>(Component: React.ComponentType<P & ThemeProps>) => {
  const wrappedComponent: React.FunctionComponent<P> = (props: P) => {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} theme={getTheme(theme)} />}
      </ThemeContext.Consumer>
    );
  };
  return wrappedComponent;
};
