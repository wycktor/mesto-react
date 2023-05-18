import logo from './images/logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип" />
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-edit">
            <img
              className="profile__avatar"
              src="<%=require('./images/avatar.png')%>"
              alt="Фото Жака-Ива Кусто."
            />
            <button className="profile__avatar-button" type="button" aria-label="Обновить аватар" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button hover-link"
              type="button"
              aria-label="Редактировать"
            />
            <p className="profile__occupation">Исследователь океана</p>
          </div>
          <button className="profile__add-button hover-link" type="button" aria-label="Добавить" />
        </section>
        <section className="elements" aria-label="Галерея">
          <ul className="elements__list" />
        </section>
        <template className="card" />
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2023 Mesto Russia</p>
      </footer>
      {/* Редактирование профиля */}
      <div className="popup popup-edit">
        <div className="popup__container">
          <button className="popup__close-button hover-link" type="button" aria-label="Закрыть" />
          <form className="popup__form popup__form-edit" name="form-edit" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <input
              className="popup__field popup__field_info_name"
              type="text"
              name="name"
              defaultValue
              placeholder="Имя"
              minLength={2}
              maxLength={40}
              required
            />
            <span className="popup__field-error name-error" />
            <input
              className="popup__field popup__field_info_occupation"
              type="text"
              name="occupation"
              defaultValue
              placeholder="Профессия"
              minLength={2}
              maxLength={200}
              required
            />
            <span className="popup__field-error occupation-error" />
            <button className="popup__submit hover-link" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* Добавление новой карточки */}
      <div className="popup popup-add">
        <div className="popup__container">
          <button className="popup__close-button hover-link" type="button" aria-label="Закрыть" />
          <form className="popup__form popup__form-add" name="form-add" noValidate>
            <h2 className="popup__title">Новое место</h2>
            <input
              className="popup__field popup__field_element_name"
              type="text"
              name="name"
              defaultValue
              placeholder="Название"
              minLength={2}
              maxLength={30}
              required
            />
            <span className="popup__field-error name-error" />
            <input
              className="popup__field popup__field_element_link"
              type="url"
              name="link"
              defaultValue
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__field-error link-error" />
            <button className="popup__submit popup__submit_disabled hover-link" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* Изменение аватара */}
      <div className="popup popup-avatar">
        <div className="popup__container">
          <button className="popup__close-button hover-link" type="button" aria-label="Закрыть" />
          <form className="popup__form popup__form-avatar" name="form-avatar" noValidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <input
              className="popup__field"
              type="url"
              name="avatar"
              defaultValue
              placeholder="Ссылка на аватар"
              required
            />
            <span className="popup__field-error avatar-error" />
            <button className="popup__submit popup__submit_disabled hover-link" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* Просмотр выбранной карточки */}
      <div className="popup popup-image">
        <div className="popup__container-image">
          <button className="popup__close-button hover-link" type="button" aria-label="Закрыть" />
          <img className="popup__image" src="#" alt="#" />
          <p className="popup__subtitle" />
        </div>
      </div>
      {/* Подтверждения удаления карточки */}
      <div className="popup popup-delete">
        <div className="popup__container">
          <button className="popup__close-button hover-link" type="button" aria-label="Закрыть" />
          <form className="popup__form popup__form-delete" name="form-delete" noValidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__submit hover-link" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
