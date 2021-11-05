import React from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import ContactIcon from './ContactIcon';

const Contact = () => {
  return (
    <section id="contact">
      <ContactIcon
        icon={faGit}
        link="https://github.com/filipCurcic/"
        direction={true}
        iconSize="5x"
        origin="x"
      />
      <ContactIcon
        icon={faLinkedin}
        link="https://www.linkedin.com/in/filip-curcic-025392162/"
        direction={false}
        iconSize="5x"
        origin="y"
      />
      <ContactIcon
        icon={faInstagram}
        link="https://www.instagram.com/filip_crc/"
        direction={false}
        iconSize="5x"
        origin="x"
      />
      {/* <ContactIcon
        icon={faFacebookF}
        link="https://www.facebook.com/filip.curcic.7/"
        direction={false}
        iconSize="4x"
      /> */}
    </section>
  );
};

export default Contact;
