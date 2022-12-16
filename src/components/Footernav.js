import React from 'react';
import twitterIcon from '../multimedia/twitter.png';
import facebookIcon from '../multimedia/facebook.png';
import instaIcon from '../multimedia/instagram.png';
import emailIcon from '../multimedia/gmail.png';

function Footer() {
  return (
    <footer id="footer" className="flex flex-col items-center text-center p-6 text-sm gap-3.5">
      <ul className="flex gap-6">
        <li><img className="w-6" src={twitterIcon} alt="" /></li>
        <li><img className="w-6" src={facebookIcon} alt="" /></li>
        <li><img className="w-6" src={instaIcon} alt="" /></li>
        <li><img className="w-6" src={emailIcon} alt="" /></li>
      </ul>
      <p>Rodrigo R, Karla D & Karam F © 2022 All rights reserved.</p>
    </footer>
  );
}

export default Footer;
