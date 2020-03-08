import { StyleSheet } from 'aphrodite/no-important';

const placeholderAnimationDuration = '.2s';
const labelAnimationDuration = '.2s';

const underline = {
  width: '0%',
  height: 2,
  transition: 'width 1s ease',
  order: 1,
};

const underlineFromLeft = {
  ...underline,
  margin: '-2px 0 0 0',
};

const underlineFromCenter = {
  ...underline,
  margin: '-2px auto 0 auto',
};

export default StyleSheet.create({
  input: {
    borderWidth: '0 0 1px 0',
    width: '100%',
    borderColor: 'rgba(0, 0, 0, 0.4)',
    padding: '8px 0',
    backgroundColor: 'transparent',
    outline: 'none',
    order: 1,

    '::placeholder': {
      transition: `opacity ${placeholderAnimationDuration} ease ${labelAnimationDuration}`,
      opacity: 1,
    },

    ':focus': {
      '::placeholder': {
        transition: `opacity ${placeholderAnimationDuration} ease`,
        opacity: 0,
      },

      ':nth-child(1n) ~ label': {
        opacity: .5,
        top: 0,
        transition: `
          top ${labelAnimationDuration} ease ${placeholderAnimationDuration},
          opacity ${labelAnimationDuration} ease ${placeholderAnimationDuration}`
      },

      ':nth-child(1n) ~ div': {
        width: '100%',
        transition: 'width 1s ease',
      }
    },
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1em',
  },

  label: {
    position: 'relative',
    opacity: 0,
    order: 0,
    transition: `top ${labelAnimationDuration} ease, opacity ${labelAnimationDuration} ease`,
    top: 10,
  },

  underlineFromLeft,
  underlineFromCenter,

  helpText: {
    marginTop: 2,
    opacity: .5,
    order: 2,
    fontSize: '.75em',
  },
});