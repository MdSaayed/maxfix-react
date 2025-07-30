import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";

const ContactInfoArea = () => {
  const animateRef = useRef(null);

  // Animation
  useStaggerReveal(animateRef, [
    ".contact-info__item",
    ".about__title",
    ".about__rating",
  ]);

  return (
    <section className="contact-info" ref={animateRef}>
      <div className="contact-info__container container">
        <div className="contact-info__item">
          <h3 className="contact-info__title">Address</h3>
          <p className="contact-info__text">
            1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
          </p>
        </div>

        <div className="contact-info__item">
          <h3 className="contact-info__title">Phone / Message</h3>
          <p className="contact-info__text">support@example.com</p>
          <p className="contact-info__text">(251) 854-6308</p>
        </div>

        <div className="contact-info__item">
          <h3 className="contact-info__title">Working Hours</h3>
          <p className="contact-info__text">Monday to Friday 09:00 to 18:30</p>
          <p className="contact-info__text">Saturday 15:30</p>
        </div>

        <div className="contact-info__item">
          <h3 className="contact-info__title">Follow us</h3>
          <div className="contact-info__socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__social contact-info__social--active"
            >
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
                <circle
                  cx="23.4015"
                  cy="23.4139"
                  r="22.9015"
                  fill="#fff"
                  stroke="black"
                />
                <path
                  d="M24.9229 25.436V33.5692H21.198V25.436H18.1035V22.1382H21.198V20.9383C21.198 16.4837 23.0533 14.1415 26.9787 14.1415C28.1821 14.1415 28.483 14.3355 29.142 14.4935V17.7554C28.4042 17.6261 28.1964 17.5543 27.43 17.5543C26.5203 17.5543 26.0332 17.8129 25.589 18.323C25.1449 18.8332 24.9229 19.7169 24.9229 20.9814V22.1453H29.142L28.0102 25.4432H24.9229V25.436Z"
                  fill="black"
                />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__social"
            >
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
                <circle
                  cx="23.4504"
                  cy="23.4139"
                  r="22.9015"
                  fill="white"
                  stroke="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.5562 15.0247H13.2949L20.7187 24.6292L13.7698 32.6862H16.9804L22.236 26.5924L26.9028 32.6302H33.1641L25.5247 22.7466L25.5382 22.7636L32.1159 15.1369H28.9053L24.0206 20.8006L19.5562 15.0247ZM16.7511 16.7067H18.7003L29.708 30.948H27.7588L16.7511 16.7067Z"
                  fill="black"
                />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__social"
            >
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
                <circle
                  cx="23.4347"
                  cy="23.4139"
                  r="22.9015"
                  fill="white"
                  stroke="black"
                />
                <path
                  d="M18.2454 20.2145H14.209V33.0865H18.2454V20.2145Z"
                  fill="black"
                />
                <path
                  d="M29.1638 19.9355C29.015 19.9169 28.8569 19.9076 28.6987 19.8983C26.4387 19.8053 25.1645 21.1446 24.7181 21.7212C24.5972 21.8793 24.5414 21.9723 24.5414 21.9723V20.2517H20.6816V33.1237H24.5414H24.7181C24.7181 31.8123 24.7181 30.5103 24.7181 29.1989C24.7181 28.492 24.7181 27.7852 24.7181 27.0783C24.7181 26.2041 24.653 25.274 25.0901 24.4742C25.4621 23.8045 26.1318 23.4697 26.8851 23.4697C29.1173 23.4697 29.1638 25.4879 29.1638 25.6739C29.1638 25.6832 29.1638 25.6925 29.1638 25.6925V33.1795H33.2002V24.7811C33.2002 21.9072 31.74 20.2145 29.1638 19.9355Z"
                  fill="black"
                />
                <path
                  d="M16.2266 18.5496C17.521 18.5496 18.5703 17.5002 18.5703 16.2058C18.5703 14.9114 17.521 13.8621 16.2266 13.8621C14.9321 13.8621 13.8828 14.9114 13.8828 16.2058C13.8828 17.5002 14.9321 18.5496 16.2266 18.5496Z"
                  fill="black"
                />
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__social"
            >
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
                <circle
                  cx="23.55"
                  cy="23.4139"
                  r="22.9015"
                  fill="white"
                  stroke="black"
                />
                <path
                  d="M32.4094 31.6926H15.8503C13.6347 31.6926 11.8496 29.7331 11.8496 27.3229V19.5045C11.8496 17.0846 13.6437 15.1349 15.8503 15.1349H32.4094C34.6251 15.1349 36.4102 17.0944 36.4102 19.5045V27.3229C36.4191 29.7429 34.6251 31.6926 32.4094 31.6926Z"
                  fill="black"
                />
                <path
                  d="M28.4738 23.2914L21.5078 19.2744V27.3083L28.4738 23.2914Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__social"
            >
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
                <circle
                  cx="23.5968"
                  cy="23.4139"
                  r="22.9015"
                  fill="white"
                  stroke="black"
                />
                <path
                  d="M14.3242 19.8982L15.2009 20.9526C15.2009 20.9526 16.8508 19.5127 17.2413 20.4726C17.6319 21.4326 20.2541 29.5921 20.2541 29.5921C20.2541 29.5921 21.0352 31.8031 22.7807 31.8031C24.3668 31.8031 25.6819 30.3475 26.7021 29.3246C29.4518 26.5785 32.3052 23.1872 32.8312 19.2216C33.0703 17.4197 32.1697 15.5234 30.1372 15.4683C29.0931 15.4369 28.0172 15.7516 27.1643 16.3339C25.9847 17.1443 25.3152 18.4426 25.0203 19.8038C25.0203 19.8038 26.5745 18.7495 27.3556 19.9927C27.8259 20.748 27.4991 21.7158 27.1325 22.4476C26.7818 23.1479 26.3832 23.8324 25.9528 24.4934C25.65 24.9576 25.1797 25.7523 24.5342 25.7523C23.7531 25.7523 23.4821 23.8718 23.3705 23.3603C22.956 21.5585 22.972 19.6858 22.422 17.9154C22.0952 16.8532 21.3859 15.2087 19.9672 15.5706C16.9544 16.3417 14.3242 19.8982 14.3242 19.8982Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoArea;
