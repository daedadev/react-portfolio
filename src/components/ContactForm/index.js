import React from "react";
import "./style.css";

function ContactForm() {
  return (
    <section id="contact-form-holder">
      <form
        id="contact-form"
        action="https://formspree.io/f/xzbodobo"
        method="POST"
      >
        <article>
          <h1>Email</h1>
          <input id="email-input" type="email" name="_replyto" />
        </article>
        <article>
          <h1> Body</h1>

          <textarea id="body-input" name="body"></textarea>
        </article>
        <article>
          <input id="submit-input" type="submit" value="Send" />
        </article>
      </form>
    </section>
  );
}

export default ContactForm;
