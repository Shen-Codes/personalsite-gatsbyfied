import React from 'react';
import { CgCloseR } from 'react-icons/cg';
import './contact-modal.css';

const ContactModal = ({ toggle }) => {
   return (
      <div id="modal-overlay">
         <div id="form-div">
            <div id="close-button">
               <CgCloseR size={32} onClick={() => toggle(false)} />
            </div>
            <form
               name="contact"
               method="POST"
               data-netlify="true"
               data-netlify-honeypot="bot-field"
               className="montform"
               id="reused_form"
            >
               <input type="hidden" name="form-name" value="contact" />
               <p className="name">
                  <label>
                     Your Name:{' '}
                     <input
                        type="text"
                        name="name"
                        className="feedback-input"
                        id="name"
                     />
                  </label>
               </p>
               <p className="email">
                  <label>
                     Your Email:{' '}
                     <input
                        type="email"
                        name="email"
                        className="feedback-input"
                        id="email"
                     />
                  </label>
               </p>
               <p className="text">
                  <label>
                     Message:{' '}
                     <textarea
                        name="message"
                        class="feedback-input"
                        id="comment"
                     ></textarea>
                  </label>
               </p>
               <div className="submit">
                  <button type="submit" id="submit">
                     Send
                  </button>
                  <div className="ease"></div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default ContactModal;
