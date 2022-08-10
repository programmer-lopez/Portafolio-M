import React from "react";

import "../styles/Contact.css";
import { MdOutlineContactMail } from "react-icons/md";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { RiMapPinFill } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";

import contactImg from "../imagenes/contact.jpg";

const Contact = () => {
  return (
    <div className="contact component__space" id="Contact">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={contactImg} alt="" className="contact__img" />
          </div>
          <div className="col__2">
            <div className="heading">
              <h1 className="heading">
                <MdOutlineContactMail /><br/>
                Contact
              </h1>
            </div>
            <div className="contact__box pointer">
              <div className="contact__meta">
                <p className="contact__text p__color">
                  Soy una persona que precisa instrucciones organizadas para que
                  un ordenador pueda ejecutar sistemas, programas y aplicaciones
                  que sean eficaces, accesibles y afable. Con atención, esfuerzo
                  y perseverancia.
                </p>
              </div>
            </div>
            <div className="contact__text p__color">
              <p>
                <BiPhoneCall /> Celular: 55-39-13-25-81
              </p>
              <p>
                <BiMailSend /> Correo: marcoslopezsanchez@hotmail.com
              </p>
              <p>
                <RiMapPinFill /> Dirección: Calle Carolina, Mz 10 Lt 20, El
                Molino, 56577 Ixtapaluca, Méx.
              </p>
              <p>
                <BsFillPersonLinesFill /> Edad: 25 años
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
