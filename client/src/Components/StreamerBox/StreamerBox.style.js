import styled from 'styled-components';
import { Colors } from '../../Variables.js';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: ${Colors.white};
  * {
    text-decoration: none;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  padding-bottom: 10px;
  font-weight: 600;
  letter-spacing: 4px;
  color: ${Colors.white};
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    color: ${Colors.light};
    text-shadow: 0px 5px 10px ${Colors.blue};
  }
`;
export const Platform = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: 400;
  color: ${Colors.light};
  letter-spacing: 1px;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  padding-bottom: 20px;
`;

export const LikesWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  gap: 30px;
`;
export const LikesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover img {
    box-shadow: 0px 0px 10px 10px ${Colors.blue};
  }
`;
export const Icon = styled.img`
  display: block;
  max-width: 44px;
  border-radius: 50%;
  margin-bottom: 5px;
  transition: all 0.2s linear;
`;
