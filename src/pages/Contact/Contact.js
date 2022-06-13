import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    if (name === 'fullName') {
      setFullName(value);

    } else if (name === 'email') {
      setEmail(value);
    }
    else {
      setMessage(value)
    }

  };

  const handleFormSubmit = (e) => {

    e.preventDefault();
    if (!validateEmail(email) || !fullName) {
      setErrorMessage('Email Address or Full Name is invalid');

      return;

    }

    alert(`Message sent to ${email}`);
    setFullName('');
    setEmail('');
    setMessage('');
    setErrorMessage("")
  };

  return (
    <div className='contact bodyStyle' >
      <aside>
        <h3>Contact me</h3>
        <div className="line "></div>

      </aside>
      <div >

        <form className="form">
          <div>
            <input
              value={fullName}
              name="fullName"
              onChange={handleInputChange}
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>

            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div>

            <textarea
              value={message}
              name="mesage"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
            />
          </div>
          <button className="btn btn-outline-warning" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </form>
      </div>

    </div>

  );
}

export default Contact;