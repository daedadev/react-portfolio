import React from "react";
import "./style.css";

function ContactForm() {
  return (
    <article id="contact-form-holder">
      <form id="contact-form" action="http://formspree.io/you@email.com">
        <input id="email-input" type="email" name="_replyto" />
        <textarea id="body-input" name="body"></textarea>
        <input id="submit-input" type="submit" value="Send" />
      </form>
    </article>
  );
}

export default ContactForm;
