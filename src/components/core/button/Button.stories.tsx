import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../common/storybook.scss';
import Button, { ButtonType } from './Button';

const buttonStory = () => {
  const [buttonType, setButtonType] = React.useState('contained' as ButtonType);
  const [buttonText, setButtonText] = React.useState('BUTTON');
  const buttonTypes: ButtonType[] = ['contained', 'outlined', 'text'];
  const handleClick = () => {
    setButtonText('Clicked!');
    setTimeout(() => setButtonText('BUTTON'), 1000);
  };
  return (
    <div className="story">
      <h1>Button</h1>

      <p>
        Basic button to be clicked by user.
        This button designed according to <a href="https://material.io/components/buttons/">material.io</a>
      </p>

      <div className="playground">
        <div className="component">
          <Button buttonType={buttonType} onClick={handleClick}>
            {buttonText}
          </Button>
        </div>
        <div className="configuration">
          <p><strong>buttonType</strong></p>
          <div className="options">
            {buttonTypes.map((bt) => (
              <p key={bt} onClick={() => setButtonType(bt)} className="option">
                <input
                  name="button-type"
                  type="radio"
                  value={bt}
                  checked={bt === buttonType}
                  readOnly />
                {bt}
              </p>
            ))}
          </div>
        </div>
      </div>

      <h2>Props</h2>

      <h3>buttonType</h3>
      <p>The type of button. The button may be <code>contained</code>, <code>outlined</code>, or <code>text</code> only. The default is contained.</p>
    </div>
  );
};

storiesOf('core/Button', module)
  .add('Button', buttonStory);
