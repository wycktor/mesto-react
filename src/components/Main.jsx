import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-edit">
          <img className="profile__avatar" src={userAvatar} alt="Фото Жака-Ива Кусто." />
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Обновить аватар"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button hover-link"
            type="button"
            aria-label="Редактировать"
            onClick={props.onEditProfile}
          />
          <p className="profile__occupation">{userDescription}</p>
        </div>
        <button
          className="profile__add-button hover-link"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Галерея">
        <ul className="elements__list">
          {cards.map(card => (
            <Card key={card._id} onCardClick={props.onCardClick} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
