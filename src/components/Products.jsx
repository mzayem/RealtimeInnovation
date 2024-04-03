import styled from "styled-components";
import MeAI from "../assets/me_ai.png";
import MeDaily from "../assets/me_daily.png";
import MeJunior from "../assets/me_junior.png";

const ProductsContainer = styled.div`
  background: black;
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

  .card-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
  }

  .card {
    background: #22252d;
    padding: 4rem 2rem;
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
    h6 {
      color: #71787a;
      margin: 0;
      font-size: 0.8rem;
    }
    p {
      color: #949c9b;
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .card-container {
      align-items: stretch;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export default function Products() {
  return (
    <ProductsContainer id="products">
      <div className="heading">
        <h3>Our Products</h3>
        <h2>What We Do</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={MeDaily} />
          <h3>Mevolve Daily</h3>
          <h6>Mobile App, Tablet App, Web</h6>
          <p>Take carge and unlock potential by evolving daily with Mevolve</p>
        </div>
        <div className="card">
          <img src={MeAI} />
          <h3>Mevolve AI</h3>
          <h6>Mobile App, Tablet App, Web</h6>
          <p>Supercharge Your Growth Embrace AI Your Personal Development</p>
        </div>
        <div className="card">
          <img src={MeJunior} />
          <h3>Mevolve Junior</h3>
          <h6>Mobile App, Tablet App, Web</h6>
          <p>
            Empower Kids with right tools to build strong foundation for a life
          </p>
        </div>
      </div>
    </ProductsContainer>
  );
}
