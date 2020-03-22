import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../common/storybook.scss';
import Button from '../button/Button';
import Card, { CardType } from './Card';


const cardStory = () => {
  const [cardType, setCardType] = React.useState('elevated' as CardType);
  const cardTypes: CardType[] = ['elevated', 'outlined'];
  return (
    <div className="story">
      <h1>Card</h1>

      <p>Cards enables developer to gives context grouping of the contents.</p>

      <div className="playground">
        <div className="component">
          <Card cardType={cardType}>
            <h1>Card Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis tristique nibh volutpat faucibus. Sed sed nunc neque.</p>
            <p>Quisque molestie libero at sodales posuere.</p>
            <Button>YES</Button> <span className="divider" />
            <Button buttonType="text">NO</Button>
          </Card>
        </div>
        <div className="configuration">
          <p><strong>cardType</strong></p>
          <div className="options">
            {cardTypes.map((ct) => (
              <p key={ct} onClick={() => setCardType(ct)} className="option">
                <input
                  name="card-type"
                  type="radio"
                  value={ct}
                  checked={ct === cardType}
                  readOnly />
                {ct}
              </p>
            ))}
          </div>
        </div>
      </div>

      <h2>Props</h2>

      <h3>cardType</h3>
      <p>The type of card. The card may be <code>elevated</code> or <code>outlined</code>. The default is elevated.</p>
    </div>
  );
};

storiesOf('core/Card', module)
  .add('Card', cardStory);
