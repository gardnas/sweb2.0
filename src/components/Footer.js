import React, { useEffect, useState } from 'react';

function linkItem(url, icon) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span className={`fa ${icon}`}></span>
    </a>
  );
}

export default function Footer() {
  const [currentMo, setCurrentMo] = useState('');
  const [currentYr, setCurrentYr] = useState('');

  useEffect(() => {
    const today = new Date();
    setCurrentMo(`${today.toLocaleString('default', { month: 'long' })}`);
    setCurrentYr(`${today.getFullYear()}`);
  }, []);

  return (
    <section id='contact'>
    <footer>
      <div>
        <h3 className="contact-title experience-title">Contact</h3>
      </div>
      <div className="copyright">
        <p className='send-message'>Thanks for checking out my website! 🙂 </p>
        <p className='connect-linkedin'>Here's my LinkedIn, feel free connect with me here: <i className='social-icons-contact-section' >{linkItem('https://www.linkedin.com/in/spencergard/', 'fa-linkedin')}</i></p>
        <p className='send-message'>If you want to send me a message feel free to shoot me an email here: <i className='social-icons-contact-section' >{linkItem('mailto:sdgard863@gmail.com', 'fa-envelope')}</i></p>
        <p>&copy;{currentYr} Created by <a className="myName" href="https://www.linkedin.com/in/spencergard/" target="_blank" rel="noopener noreferrer">Spencer 🌧️</a> | Seattle, WA | Last Update: {currentMo} {currentYr}</p>
      </div>
    </footer>
    </section>
  )
}
