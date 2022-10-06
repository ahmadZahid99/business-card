import React from 'react';
import twitterIcon from '../../images/Twitter-Icon.png';
import facebookIcon from '../../images/Facebook-Icon.png';
import instagramIcon from '../../images/Instagram-Icon.png';
import githubIcon from '../../images/Github-Icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <a
        className='footer--icon'
        href='https://twitter.com/ahmadzahid2556'
        target='_blank'
      >
        <img src={twitterIcon}></img>
      </a>
      <a
        className='footer--icon'
        href='https://www.facebook.com/profile.php?id=100010332642416'
        target='_blank'
      >
        <img src={facebookIcon}></img>
      </a>
      <a
        className='footer--icon'
        href='https://www.instagram.com/ahmadzahid256/'
        target='_blank'
      >
        <img src={instagramIcon}></img>
      </a>
      <a
        className='footer--icon'
        href='https://github.com/ahmadZahid99'
        target='_blank'
      >
        <img src={githubIcon}></img>
      </a>
    </div>
  );
};

export default Footer;
