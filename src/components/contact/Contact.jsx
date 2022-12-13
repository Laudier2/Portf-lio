import React from "react";
import emailjs from 'emailjs-com'
import "./contact.scss";

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('sms', 'template_fjnfy4v', e.target, 'user_K11nlj85yT9jX0EWwcjII')
      .then((result) => {
        alert("Mensagem enviada com sucesso! 👍 Em breve você receberá um E-mail de confirmação!");
      
      }, (error) => {
          alert(error.message)
          
      });

      e.target.reset()

    }

  return (
    <div>
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contato.</h2>
          <form onSubmit={sendEmail}>
            <input type="text" placeholder="Nome Completo" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <textarea placeholder="Mensagem" name="message"></textarea>
            <button type="submit">Envia Menssage</button>
           
          </form>
        </div>
      </div>
    </div>
  );
}
