import React from 'react';

import { defaultTheme, injectTheme, Theme, InjectedThemeProps } from './theme';

export interface HephaestusProviderProps {
  theme: Theme;
  children?: React.ReactNode;
}

export interface InjectedHephaestusProps extends InjectedThemeProps {
  // empty
};

const defaultContextValue = {
  theme: injectTheme(defaultTheme),
}

const HephaestusContext = React.createContext<InjectedHephaestusProps>(defaultContextValue);

export default (props: HephaestusProviderProps) => {
  const { theme, ...rest } = props;

  const themeClassNames = injectTheme(theme);
  const providedValue = {
    theme: themeClassNames,
  };
  return (
    <HephaestusContext.Provider value={providedValue} {...rest} />
  );
}

export const withHephaestusContext = <Props extends object>(Component: React.ComponentType<Props & InjectedHephaestusProps>) => {
  const wrappedComponent: React.FunctionComponent<Props> = (props: Props) => {
    return (
      <HephaestusContext.Consumer>
        {(value: InjectedHephaestusProps) => <Component {...props} {...value} />}
      </HephaestusContext.Consumer>
    );
  };
  return wrappedComponent;
};
