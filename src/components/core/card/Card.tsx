import classnames from 'classnames';
import React from 'react';

import * as cStyles from '../../../common/styles/';
import { InjectedThemeProps } from '../../../common/provider/theme';
import { withHephaestusContext } from '../../../common/provider/';
import './Card.scss';

export const CARD_TYPE_ELEVATED = 'elevated';
export const CARD_TYPE_OUTLINED = 'outlined';

export type CardType = 'elevated' | 'outlined';

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  cardType?: CardType;
};

const Card: React.FunctionComponent<CardProps & InjectedThemeProps> = (props) => {
  const {
    cardType,
    className,
    theme,
    ...htmlProps
  } = props;

  const cardClass = classnames(
    `${cStyles.ns}-card`,
    (cardType === CARD_TYPE_ELEVATED) && cStyles.elevated,
    (cardType === CARD_TYPE_OUTLINED) && cStyles.outlined,

    theme.bgColorForeground,
  );

  const classNames = `${cardClass} ${className}`;

  return <div className={classNames} {...htmlProps} />;
};

Card.defaultProps = {
  cardType: CARD_TYPE_ELEVATED,
};

export default withHephaestusContext<CardProps>(Card);
