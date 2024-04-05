import styled from "styled-components";
import Logo from "../assets/small-logo.png";

const FooterContainer = styled.footer`
  padding: 1rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
  }
  p {
    color: #969ea1;
    margin: 0;
    flex-grow: 1;
    flex-basis: 0;

    .copyright {
      display: flex;
      justify-content: flex-end;
    }
  }
  img {
    width: 40px;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <p>Dublin, IE</p>
        <div
          style={{
            flexGrow: 1,
            flexBasis: 0,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img src={Logo} />
        </div>
        <p className="copyright">
          All copyrights are reserved by Realtime Innovative
        </p>
      </div>
    </FooterContainer>
  );
}
