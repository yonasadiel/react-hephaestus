import { StyleSheet } from 'aphrodite/no-important';
import React, { ProviderProps } from 'react';

export interface Theme {
  primaryColor?: string;
  accentColor?: string;
  textColor?: string;
  foregroundColor?: string;
  backgroundColor?: string;

  fontSize?: number;
  fontSizeLarge?: number;
  fontSizeSmall?: number;
}

export interface ThemeStyles<T> {
  bgColorBackground: T;
  bgColorForeground: T;
  bgColorPrimary: T;
  bgColorAccent: T;

  colorPrimary: T;
  colorAccent: T;

  borderColorPrimary: T;
  borderColorAccent: T;

  fontSizeRegular: T;
  fontSizeLarge: T;
  fontSizeSmall: T;
}

export interface ThemeProps {
  /**
   * Provided theme from ThemeProvider.
   * Will use default theme if not present.
   */
  tStyles: ThemeStyles<object>;
}

const defaultTheme: Theme = {
  primaryColor: '#000000',
  accentColor: '#0000b3',
  textColor: '#000000',
  foregroundColor: '#ffffff',
  backgroundColor: '#f0f0f0',

  fontSize: 14,
  fontSizeLarge: 16,
  fontSizeSmall: 12,
};

const createThemeStyles = (theme: Theme) => {
  return StyleSheet.create({
    bgColorBackground: { backgroundColor: theme.backgroundColor },
    bgColorForeground: { backgroundColor: theme.foregroundColor },
    bgColorPrimary: { backgroundColor: theme.primaryColor },
    bgColorAccent: { backgroundColor: theme.accentColor },

    colorPrimary: { color: theme.primaryColor },
    colorAccent: { color: theme.accentColor },

    borderColorPrimary: { borderColor: theme.primaryColor },
    borderColorAccent: { borderColor: theme.accentColor },

    fontSizeRegular: { fontSize: theme.fontSize },
    fontSizeLarge: { fontSize: theme.fontSizeLarge },
    fontSizeSmall: { fontSize: theme.fontSizeSmall },
  });
};

const ThemeContext = React.createContext(createThemeStyles(defaultTheme));

export default (props: ProviderProps<Theme>) => {
  const { value, ...rest } = props;
  const completedTheme: Theme = {
    ...defaultTheme,
    ...value,
  };
  const themeStyles = createThemeStyles(completedTheme);
  return (
    <ThemeContext.Provider value={themeStyles} {...rest} />
  );
}

export const withTheme = <P extends object>(Component: React.ComponentType<P & ThemeProps>) => {
  const wrappedComponent: React.FunctionComponent<P> = (props: P) => {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} tStyles={theme} />}
      </ThemeContext.Consumer>
    );
  };
  return wrappedComponent;
};
