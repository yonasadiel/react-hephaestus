import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../common/storybook.scss';
import TextInput, { UnderlineAnimation } from './TextInput';

const textInputStory = () => {
  const [underlineAnimation, setUnderlineAnimation] = React.useState('center' as UnderlineAnimation);
  const [isShowingHelp, setIsShowingHelp] = React.useState(false);
  const [isShowingError, setIsShowingError] = React.useState(false);
  const underlineAnimations: UnderlineAnimation[] = ['center', 'left', 'none'];
  return (
    <div className="story">
      <h1>TextInput</h1>

      <p>
        Form input for text, number, password, etc.
      </p>

      <div className="playground">
        <div className="component">
          <TextInput
            placeholder="username"
            underlineAnimation={underlineAnimation}
            helpText={isShowingHelp ? 'this is help text' : undefined}
            errorText={isShowingError ? 'this is error text' : undefined}
          />
        </div>
        <div className="configuration">
          <div className="options">
            <p className="option" onClick={() => setIsShowingHelp(!isShowingHelp)}>
              <input type="checkbox" checked={isShowingHelp} readOnly/>show help
            </p>
          </div>
          <div className="options">
            <p className="option" onClick={() => setIsShowingError(!isShowingError)}>
              <input type="checkbox" checked={isShowingError} readOnly/>show error
            </p>
          </div>
          <div className="options">
            <p><strong>underlineAnimation</strong></p>
            {underlineAnimations.map((ct) => (
              <p key={ct} onClick={() => setUnderlineAnimation(ct)} className="option">
                <input
                  name="card-type"
                  type="radio"
                  value={ct}
                  checked={ct === underlineAnimation}
                  readOnly />
                {ct}
              </p>
            ))}
          </div>
        </div>
      </div>

      <h2>Props</h2>
      <p>This component accepts all input props, with additional props:</p>

      <h3>helpText</h3>
      <p>Description of the input for user understands what they should input.</p>

      <h3>errorText</h3>
      <p>Description of the error of user previous value.</p>

      <h3>underlineAnimation</h3>
      <p>Direction of underline animation, either <code>center</code>, <code>left</code>, or <code>none</code>. The default is <code>center</code>.</p>

      <h3>wrapperStyle</h3>
      <p>React style for the input wrapper</p>
    </div>
  );
};

storiesOf('form/input/TextInput', module)
  .add('TextInput', textInputStory);
