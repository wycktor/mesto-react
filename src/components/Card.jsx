import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button type="button" aria-label="Удалить" className="element__recycle-button"></button>
      <img
        className="element__image"
        onClick={handleClick}
        src={props.card.link}
        alt={`${props.card.name}`}
      />
      <div className="element__content">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button" aria-label="Лайк"></button>
          <p className="element__likes">{[...props.card.likes].length}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;
