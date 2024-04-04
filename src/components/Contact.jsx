import styled from "styled-components";
import LinkedIn from "../assets/linkedin.png";
import EmailIcon from "../assets/formkit_email.png";

const ContactContainer = styled.section`
  background-color: #222222;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    color: #f1ff28;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  h2 {
    color: white;
    font-weight: 400;
    margin: 0;
    font-size: 2.5rem;
  }

  a.link {
    color: #f1ff28;
    background: black;
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: max-content;
    font-size: 1.125rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0 auto;
  }
  a {
    margin: 0 auto;
  }

  img {
    width: 40px;
    height: 40px;
  }

  img.email {
    height: 24px;
    width: auto;
    margin-right: 0.125rem;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <div className="heading">
        <h3>Contact</h3>
        <h2>Connect With Us</h2>
      </div>
      <a href="mailto:hello@realtime-innovations.com" className="link">
        <img className="email" src={EmailIcon} />
        hello@realtime-innovations.com
      </a>
      <a href="#">
        <img src={LinkedIn} />
      </a>
    </ContactContainer>
  );
}
