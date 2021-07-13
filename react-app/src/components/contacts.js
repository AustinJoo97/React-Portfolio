import { useState } from 'react';

export default function Contacts(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function emailValidator(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(String(email).toLowerCase());
    };

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputVal = target.value;
    
        if (inputType === 'email') {
          setEmail(inputVal);
        } else if (inputType === 'name') {
          setName(inputVal);
        } else {
          setMessage(inputVal);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        if (!emailValidator(email)) {
          setErrorMessage('Email is invalid!');

          return;
        }

        alert(`Thank you for the message ${name}! You will receive a response shortly!`);
    
        setName('');
        setEmail('');
        setMessage('');
    };

    return(
        <div className="contactMe" id="contacts">
            <form id='contactForm'>
                <label for='name' id='nameLabel'>Name: </label>
                <br></br>
                <input 
                value={name}
                id='nameInput' 
                name='name' 
                onChange={handleInputChange}
                placeholder='John Doe'></input>

                <br></br>

                <label for='email' id='emailInput' onChange={emailValidator}>Email: </label>
                <br></br>
                <input 
                value={email}
                id='emailInput' 
                name='email' 
                onChange={handleInputChange}
                placeholder='johndoe@gmail.com'></input>

                <br></br>

                <label for='message' id='messageLabel'>Message: </label>
                <br></br>
                <input 
                value={message}
                id='messageInput' 
                onChange={handleInputChange}
                name='message'></input>

                <br></br>

                <button 
                id='contactSubmitButton' 
                type="button" 
                onClick={handleFormSubmit}>Submit</button>
            </form>

            <h1>Please enter your contact information in the form on the left as well as your message and I will get back to you as soon as possible! Thank you!</h1>

            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}