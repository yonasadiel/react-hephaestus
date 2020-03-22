import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../common/storybook.scss';
import Modal from './Modal';
import Button from '../button/Button';

const modalStory = () => {
  const [isShowingModal, setIsShowingModal] = React.useState(false);
  return (
    <div className="story">
      <h1>Modal</h1>

      <div className="playground">
        <div className="component">
          <Modal isShowing={isShowingModal} closeModal={() => setIsShowingModal(false)}>
            <h1>Modal</h1>
            <p>Lorem ipsum sit dolor amet</p>
          </Modal>

          <Button onClick={() => setIsShowingModal(true)}>Open Modal</Button>
        </div>
      </div>

      <h2>Props</h2>

      <h3>closeModal (required)</h3>
      <p>Function that will be invoked to close the modal. </p>

      <h3>isShowing</h3>
      <p>Boolean of the modal is showing or not. The default is false.</p>
    </div>
  );
};


storiesOf('core/Modal', module)
  .add('Modal', modalStory);