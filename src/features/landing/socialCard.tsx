import { styled } from "styled-components";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const MainContainer = styled.div<{ $angle: string }>`
  transition: 0.2s all;
  cursor: pointer;
  rotate: ${({ $angle }) => $angle}deg;

  &:hover {
    filter: drop-shadow(4px 4px 0px #000);
    rotate: 0deg;
  }
`;

const Container = styled.div`
  display: flex;
  width: 183px;
  padding: 17px 15px 24px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 20px;
  border: 3px solid #000;
  background: #fff;
  box-sizing: border-box;
`;

const Title = styled.h3`
  color: #252525;
  text-align: center;
  font-family: Matter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
`;

const Banner = styled.div<{ $color: string }>`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 3px solid #252525;
  background: ${({ $color }) => $color};
`;

const Icon = styled.div`
  font-size: 69px;
  color: white;
`;

export const SocialCard = ({ type }: { type: string }) => {
  return (
    <MainContainer
      $angle={type === "twitter" ? "5" : type === "telegram" ? "-6" : "0"}
    >
      <Container>
        <Banner
          $color={
            type === "twitter"
              ? "#000"
              : type === "telegram"
              ? "#0094FF"
              : "#5F70F5"
          }
        >
          <Icon>
            {type === "twitter" ? (
              <BsTwitterX />
            ) : type === "telegram" ? (
              <FaTelegramPlane />
            ) : (
              <BsDiscord />
            )}
          </Icon>
        </Banner>
        <Title>{type}</Title>
      </Container>
    </MainContainer>
  );
};