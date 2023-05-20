function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          onClick={props.onClose}
          aria-label="Закрыть"
          className="popup__close-button hover-link"
        ></button>
        <form name={props.name} className={`popup__form popup__form_type_${props.name}`} noValidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__submit hover-link" type="submit">
            {props.buttonText || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
