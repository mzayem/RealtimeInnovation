import styled from "styled-components";
import HeroImage from "../assets/hero-background.jpeg";

const HomeContainer = styled.div`
  padding: 12rem 5rem;
  position: relative;
  h1 {
    font-weight: 400;
    font-size: 3rem;
    max-width: 600px;
    span {
      color: #eafb27;
    }
    margin-bottom: 3rem;
    z-index: 1;
  }

  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    max-width: 600px;
    line-height: 140%;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #222222 10%, transparent);
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    padding: 15rem 1rem 5rem 1rem;
    .text-container {
      display: flex;
      flex-direction: column;
      text-align: center;

      h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 1rem;
      }
    }

    &::after {
      background: linear-gradient(to top, #222222 20%, transparent);
    }
  }
`;

export default function Hero() {
  return (
    <HomeContainer id="Home">
      <div
        style={{ zIndex: 2, position: "relative" }}
        className="text-container"
      >
        <h1>
          Build <span>Innovation Solutions</span> for a better tomorrow
        </h1>
        <h2>
          We focus on creating innovative products that empower people to live
          better meaningful lives
        </h2>
      </div>
      <img src={HeroImage} />
    </HomeContainer>
  );
}
