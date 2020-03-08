import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  buttonStyles: {
    display: 'inline-flex',
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 36,
    minWidth: 64,
    padding: '5px 15px',

    backgroundColor: 'transparent',
    color: '#ffffff',

    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 0,

    cursor: 'pointer',
  },
});
