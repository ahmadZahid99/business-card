import React from 'react';
import myPhoto from '../../images/ahmadZahid.jpeg';
import emailIcon from '../../images/Email-Icon.png';
import linkedInIcon from '../../images/linkedIn-Icon.png';
const Info = () => {
  return (
    <div>
      <img src={myPhoto} className='image'></img>
      <h3 className='image-name'>Ahmad Zahid</h3>
      <h4 className='label'>Frontend Developer</h4>
      <h5 className='website'>ahmadzahid.website</h5>
      {/* Button group */}
      <div className='buttons'>
        <a href='mailto:ahmadzahid2556@gmail.com' type='email' rel='noreferrer'>
          <button className='email'>
            <img src={emailIcon}></img>
            <span>Email</span>
          </button>
        </a>
        <a
          href='https://www.linkedin.com/in/ahmad-zahid-648b36160/'
          target='_blank'
          rel='noreferrer'
        >
          <button className='linkedIn'>
            <img src={linkedInIcon}></img>
            <span>LinkedIn</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
