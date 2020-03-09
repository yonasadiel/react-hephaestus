import { css } from 'aphrodite/no-important';
import React from 'react';

import hStyles from '../../../common/styles';
import { ThemeProps, withTheme } from '../../../common/theme';
import styles from './styles';

export const CARD_TYPE_ELEVATED = 'elevated';
export const CARD_TYPE_OUTLINED = 'outlined';

type CardType = 'elevated' | 'outlined';

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  cardType?: CardType;
};

const Card: React.FunctionComponent<CardProps & ThemeProps> = (props) => {
  const {
    cardType,
    className,
    tStyles,
    ...htmlProps
  } = props;

  const cardClass = css(
    styles.cardStyles,
    (cardType === CARD_TYPE_ELEVATED) && hStyles.elevated,
    (cardType === CARD_TYPE_OUTLINED) && hStyles.outlined,

    tStyles.bgColorForeground,
  );

  const classNames = `${cardClass} ${className}`;

  return <div className={classNames} {...htmlProps} />;
};

Card.defaultProps = {
  cardType: CARD_TYPE_ELEVATED,
};

export default withTheme<CardProps>(Card);
