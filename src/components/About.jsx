import styled from "styled-components";
import HonestyImage from "../assets/ic-honesty.png";
import IntegrityImage from "../assets/ic-integrity.png";
import ProactiveImage from "../assets/ic-proactive.png";
import ResponsiveImage from "../assets/ic-responsive.png";
import SupportiveImage from "../assets/ic-supportive.png";
import AboutGraphic from "../assets/AboutGraphic.png";

const AboutContainer = styled.div`
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

  p {
    margin: 0;
    font-size: 1.15rem;
  }

  .item-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .graphic {
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 960px) {
    .heading {
      padding: 1rem 0rem;
    }
    .heading h2,
    .desc {
      text-align: center;
    }

    .content {
      flex-direction: column;

      .graphic {
        width: 100%;
      }
    }
    padding: 1rem;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h4 {
    color: white;
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  p {
    color: #949c9b;
    margin: 0;
    font-size: 1rem;
  }
`;

export default function About() {
  return (
    <AboutContainer id="about">
      <div className="heading">
        <h3>About</h3>
        <h2>Our Culture and Values</h2>
      </div>
      <p className="desc">
        We nurture a culture based on strong values and positive behaviors.
      </p>
      <div className="content">
        <div className="item-container">
          <Item>
            <img src={IntegrityImage} />
            <div>
              <h4>Integrity First</h4>
              <p>Uphold honestly and ethical standards in all actions</p>
            </div>
          </Item>
          <Item>
            <img src={ProactiveImage} />

            <div>
              <h4>Be Proactive</h4>
              <p>Take initiative and seize opportunity</p>
            </div>
          </Item>
          <Item>
            <img src={SupportiveImage} />

            <div>
              <h4>Be Supportive</h4>
              <p>Foster collaboration and offer support</p>
            </div>
          </Item>
          <Item>
            <img src={ResponsiveImage} />

            <div>
              <h4>Be Responsible</h4>
              <p>Embrace diversity and value different perspectives</p>
            </div>
          </Item>
          <Item>
            <img src={HonestyImage} />

            <div>
              <h4>Be Honest</h4>
              <p>Always treat others with dignity and respect</p>
            </div>
          </Item>
        </div>
        <img className="graphic" src={AboutGraphic} />
      </div>
    </AboutContainer>
  );
}
