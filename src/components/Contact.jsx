import styled from "styled-components";
import LinkedIn from "../assets/linkedin.png";

const ContactContainer = styled.div`
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
    padding: 1rem;
    border-radius: 0.5rem;
    width: max-content;
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-envelope"
          viewBox="0 0 16 16"
          color="#f1ff28"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
        </svg>
        hello@realtime-innovations.com
      </a>
      <a href="#">
        <img src={LinkedIn} />
      </a>
    </ContactContainer>
  );
}
