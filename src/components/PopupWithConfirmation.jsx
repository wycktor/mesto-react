import React from 'react';

import PopupWithForm from './PopupWithForm';

export default function PopupWithConfirmation(props) {
  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
      loadingButtonText="Удаление..."
      renderLoading={props.renderLoading}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.onCardDelete}
    />
  );
}
