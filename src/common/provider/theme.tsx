import { ns } from '../styles';

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

export interface ThemeClassNames {
  bgColorBackground: string;
  bgColorForeground: string;
  bgColorPrimary: string;
  bgColorAccent: string;

  colorPrimary: string;
  colorAccent: string;

  borderColorPrimary: string;
  borderColorAccent: string;

  fontSizeRegular: string;
  fontSizeLarge: string;
  fontSizeSmall: string;
}

export interface InjectedThemeProps {
  /**
   * Provided theme from ThemeProvider Consumer.
   * Will use default theme if not present.
   */
  theme: ThemeClassNames;
}

// component that wrapped with HOC withTheme() will receive an object of
// themeClassNames
const themeClassNames = {
  bgColorBackground: `${ns}-bg-color-background`,
  bgColorForeground: `${ns}-bg-color-foreground`,
  bgColorPrimary: `${ns}-bg-color-primary`,
  bgColorAccent: `${ns}-bg-color-accent`,

  colorPrimary: `${ns}-color-primary`,
  colorAccent: `${ns}-color-accent`,

  borderColorPrimary: `${ns}-border-color-primary`,
  borderColorAccent: `${ns}-border-color-accent`,

  fontSizeRegular: `${ns}-font-size-regular`,
  fontSizeLarge: `${ns}-font-size-large`,
  fontSizeSmall: `${ns}-font-size-small`,
};

export const defaultTheme: Theme = {
  primaryColor: '#000000',
  accentColor: '#0000b3',
  textColor: '#000000',
  foregroundColor: '#ffffff',
  backgroundColor: '#f0f0f0',

  fontSize: 14,
  fontSizeLarge: 16,
  fontSizeSmall: 12,
};

function generateCssRules(theme: Theme): string[] {
  const cssRules: string[] = [];

  cssRules.push(`.${themeClassNames.bgColorBackground}{background-color:${theme.backgroundColor}}`);
  cssRules.push(`.${themeClassNames.bgColorForeground}{background-color:${theme.foregroundColor}}`);
  cssRules.push(`.${themeClassNames.bgColorPrimary}{background-color:${theme.primaryColor}}`);
  cssRules.push(`.${themeClassNames.bgColorAccent}{background-color:${theme.accentColor}}`);

  cssRules.push(`.${themeClassNames.colorPrimary}{color:${theme.primaryColor}}`);
  cssRules.push(`.${themeClassNames.colorAccent}{color:${theme.accentColor}}`);

  cssRules.push(`.${themeClassNames.borderColorPrimary}{border-color:${theme.primaryColor}}`);
  cssRules.push(`.${themeClassNames.borderColorAccent}{border-color:${theme.accentColor}}`);

  cssRules.push(`.${themeClassNames.fontSizeRegular}{font-size:${theme.fontSize}}`);
  cssRules.push(`.${themeClassNames.fontSizeLarge}{font-size:${theme.fontSizeLarge}}`);
  cssRules.push(`.${themeClassNames.fontSizeSmall}{font-size:${theme.fontSizeSmall}}`);

  return cssRules;
}

export const injectTheme = (theme: Theme) => {
  const completedTheme: Theme = Object.assign({}, defaultTheme, theme);
  const cssRules = generateCssRules(completedTheme);

  // Try to find a style tag with the `data-hephaestus` attribute first.
  let styleTag = ((document.querySelector("style[data-hephaestus]") as any) as HTMLStyleElement | null);

  // If that doesn't work, generate a new style tag.
  if (styleTag == null) {
      // Taken from http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
      const head = document.head || document.getElementsByTagName('head')[0];
      styleTag = document.createElement('style');

      styleTag.type = 'text/css';
      styleTag.setAttribute("data-hephaestus", "");
      head.appendChild(styleTag);
  }

  styleTag.innerText = (styleTag.innerText || '') + cssRules.join('');
  return themeClassNames;
}
