import styled from 'styled-components';
import { Media, Colors } from '../../Variables.js';

export const Page = styled.div`
  display: block;
  width: 100%;
  background-color: ${Colors.dark};
  background-image: url('../images/background-icons.svg');
  background-position: center center;
  background-size: 300px;
  min-height: 100vh;
  color: ${Colors.white};
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  padding: 60px 20px;
  margin: 0 auto;
  text-align: center;
  ${Media.sm`
  padding: 30px 20px;
  `}
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px 40px;
  grid-template-columns: 1fr 1fr 1fr;
  ${Media.sm`
  grid-template-columns: 1fr 1fr;
  `}
  ${Media.xs`
  grid-template-columns: 100%;
  gap: 20px;
  `}
`;

export const Title = styled.h1`
  font-size: 42px;
  padding-bottom: 0px;
  font-weight: 600;
  letter-spacing: 4px;
`;
export const Platform = styled.p`
  font-size: 20px;
  padding-bottom: 30px;
  font-weight: 400;
  color: ${Colors.light};
  letter-spacing: 1px;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto 40px auto;
  border-radius: 16px;
  box-shadow: 0px 0px 20px 10px ${Colors.blue};
`;
export const LikesWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 40px;
`;
export const LikesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Icon = styled.img`
  display: block;
  max-width: 62px;
`;
