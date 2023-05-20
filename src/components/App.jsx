import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {/* Изменение аватара */}
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name="edit-avatar"
        title="Обновить аватар"
        onClose={closeAllPopups}
      >
        <>
          <input
            className="popup__input popup__input_type_avatar"
            type="url"
            name="avatar"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="popup__input-error avatar-error"></span>
        </>
      </PopupWithForm>
      {/* Редактирование профиля */}
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name="profile"
        title="Редактировать профиль"
        onClose={closeAllPopups}
      >
        <>
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error name-error"></span>
          <input
            className="popup__input popup__input_type_about"
            type="text"
            name="about"
            placeholder="Профессия"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error about-error"></span>
        </>
      </PopupWithForm>
      {/* Добавление новой карточки */}
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name="card"
        title="Новое место"
        onClose={closeAllPopups}
        submit="Создать"
      >
        <>
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__error name-error"></span>
          <input
            className="popup__input popup__input_type_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error link-error"></span>
        </>
      </PopupWithForm>
      {/* Просмотр выбранной карточки */}
      <ImagePopup name="image" card={selectedCard} onClose={closeAllPopups} />

      <div className="popup popup-image">
        <div className="popup__container-image">
          <button className="popup__close-button hover-link" type="button" aria-label="Закрыть" />
          <img className="popup__image" src="#" alt="#" />
          <p className="popup__subtitle" />
        </div>
      </div>
    </div>
  );
}

export default App;
