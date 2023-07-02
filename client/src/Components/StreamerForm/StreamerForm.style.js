import styled from 'styled-components';
import { Media, Colors } from '../../Variables.js';

export const Wrapper = styled.form`
  display: flex;

  justify-content: space-between;
  gap: 50px;
  width: 100%;
  padding: 20px 40px;
  border-radius: 16px;
  margin-bottom: 40px;
  background-color: ${Colors.navy};
  ${Media.lg`
 flex-wrap: wrap;
 gap: 20px;
 margin-bottom: 20px;

  `}
  ${Media.sm`
flex-direction: column;
padding: 20px;
    `}
`;

export const Label = styled.label`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  ${Media.lg`
 flex: 1
    `}
`;
export const LabelTextarea = styled.label`
  display: flex;
  flex: 1;
  gap: 5px;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  ${Media.lg`
  min-width: 80%;
    `}
  ${Media.sm`
  min-width: 0;
  
    `}
`;
export const Input = styled.input`
  display: block;
  padding: 3px 0px;
  background: transparent;
  border: none;
  width: 100%;
  font-size: 16px;
  outline: none;
  color: ${Colors.white};
  border-bottom: 1px solid ${Colors.blue};
  transition: all 0.2s linear;
  &:hover,
  &:focus {
    border-bottom: 1px solid ${Colors.light};
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 26px;
  font-size: 16px;
  padding: 3px 0px;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  color: ${Colors.white};
  border-bottom: 1px solid ${Colors.blue};
  transition: all 0.2s linear;
  &:hover,
  &:focus {
    border-bottom: 1px solid ${Colors.light};
  }
`;

export const Button = styled.button`
  display: block;
  padding: 8px 20px;
  background: ${Colors.blue};
  border: none;
  font-weight: 700;
  outline: none;
  resize: none;
  color: ${Colors.black};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background: ${Colors.light};
  }
`;
export const ButtonWrapper = styled.label`
  display: flex;
  align-items: flex-end;
  ${Media.sm`
  flex-direction: column;
  align-items: stretch;
    
      `}
`;
