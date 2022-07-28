function Subscribe() {
  return (
    <section className="subscribe">
      <form className="form">
        <input
          type="email"
          name="email"
          id="email"
          className="form__input"
          placeholder="example@email.com"
          required
        />
        <button className="form__btn" onClick={(e) => e.preventDefault()}>
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Subscribe;
