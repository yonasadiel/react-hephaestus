import classNames from 'classnames';
import React from 'react';

import * as Classes from '../../../common/classes';
import { ThemeProps, withTheme } from '../../../theme';
import './Card.scss';

const CARD_TYPE_ELEVATED = 'elevated';
const CARD_TYPE_OUTLINED = 'outlined';

type CardType = 'elevated' | 'outlined';

export interface CardProps {
  cardType?: CardType;
};

type ThemedCardProps = CardProps & ThemeProps & React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FunctionComponent<ThemedCardProps> = (props) => {
  const {
    className,
    theme,
    cardType,
    style: stlyeProps,
    ...htmlProps
  } = props;

  const classes = classNames(
    Classes.CARD,
    {
      [Classes.ELEVATED]: (cardType === CARD_TYPE_ELEVATED),
      [Classes.OUTLINED]: (cardType === CARD_TYPE_OUTLINED)
    },
    className,
  );

  const cardStyle = {
    borderRadius: theme.borderRadius,
    backgroundColor: theme.foregroundColor,
    ...stlyeProps,
  };

  return <div className={classes} style={cardStyle} {...htmlProps} />;
};

Card.defaultProps = {
  cardType: CARD_TYPE_ELEVATED,
};

export default withTheme<ThemedCardProps>(Card);
