import './style.css'
export default function Form() {
  return (
    <form className="form" action="" method="POST" enctype="text/plain">
      <h1>Contact Us</h1>
      <div className="wrapper">
        <div className="field">
          <label for="email">Email:
            <input type="text" name="email" id="email" />
          </label>
        </div>
        <div className="field">
          <label for="email">Assunto:
            <input type="text" name="subject" id="Subject" />
          </label>
        </div>
        <div className="field">
          <label>Fale conosco:
            <textarea className="talk-with-us" type="text" name="comments" id="comments"></textarea>
          </label>
        </div>
        <div className="buttons">
          <input type="submit" name="submit" value="Enviar" />
          <input type="reset" name="reset" value="Limpar Campos" />
        </div>
      </div>
    </form>
  );
}