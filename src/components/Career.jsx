import styled from "styled-components";
import Flutter from "../assets/flutter.png";
import Frontend from "../assets/frontend.png";
import UIUX from "../assets/ui-ux.png";
import Automation from "../assets/qa-automation.png";

const CareerContainer = styled.section`
  background: black;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

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

  .card-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
  }

  .card {
    background: #22252d;
    padding: 3rem;
    flex-grow: 1;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    h3 {
      color: white;
      margin: 0;
      font-size: 1.25rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0;
    }
    li {
      color: #979f9e;
      padding: 0;
      text-align: left;
    }

    button {
      all: unset;
      color: #f1ff28;
      border: 1px solid #f1ff28;
      border-radius: 0.5rem;
      padding: 0.5rem 1.25rem;
      transition: all 300ms;

      &:hover {
        background-color: #f1ff28;
        color: black;
        cursor: pointer;
      }
    }
    img {
      height: 50px;
      width: auto;
    }
  }

  @media screen and (max-width: 768px) {
    .card-container {
      flex-direction: column;
      align-items: stretch;
    }
    padding: 1rem;
  }
`;

export default function Career() {
  return (
    <CareerContainer id="career">
      <div className="heading">
        <h3>Career</h3>
        <h2>Join Our Team</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={Frontend} />
          <h3>Front End Developer</h3>
          <ul>
            <li>Angular</li>
            <li>Firebase</li>
          </ul>
          <button>Apply</button>
        </div>
        <div className="card">
          <img src={UIUX} />

          <h3>UI/UX Developer</h3>
          <ul>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
          <button>Apply</button>
        </div>
        <div className="card">
          <img src={Flutter} />

          <h3>Flutter Developer</h3>
          <ul>
            <li>Flutter</li>
            <li>Firebase</li>
          </ul>
          <button>Apply</button>
        </div>
        <div className="card">
          <img src={Automation} />

          <h3>QA Automation</h3>
          <ul>
            <li>Appium</li>
            <li>Typescript</li>
          </ul>
          <button>Apply</button>
        </div>
      </div>
    </CareerContainer>
  );
}
