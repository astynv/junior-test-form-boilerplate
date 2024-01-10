import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';
import { GoArrowRight } from 'react-icons/go';

export const FrontItem = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  font-size: 13px;
  font-weight: 400;
  border: 1px solid #acacac;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
  backface-visibility: hidden;
`;

export const BackItem = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  font-size: 13px;
  font-weight: 400;
  border: 1px solid #acacac;
  min-height: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
`;

export const CardContent = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #0d0d0d;
  margin-bottom: 1rem;
`;

export const Date = styled.div`
  font-size: 16px;

  line-height: 1.7;
  color: #3d3d3d;
`;

export const Delete = styled(AiOutlineDelete)`
  width: 20px;
  height: 20px;
  :hover {
    transform: translate(0, -3px);
    transition: 0.4s ease-out;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Flip = styled(GoArrowRight)`
  width: 20px;
  height: 20px;
  color: #3d3d3d;
  :hover {
    transform: translate(5px, 0);
    transition: 0.4s ease-out;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 400;
  color: #242424;
`;
