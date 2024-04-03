import styled from "styled-components";
import Logo from "../assets/small-logo.png";

const FooterContainer = styled.footer`
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  @media screen and (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>Dublin, IE</p>
      <div
        style={{
          flexGrow: 1,
          flexBasis: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={Logo} />
      </div>
      <p className="copyright">
        All copyrights are reserved by Realtime Innovative
      </p>
    </FooterContainer>
  );
}
