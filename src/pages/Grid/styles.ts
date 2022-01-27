import styled from 'styled-components';
import { Image, Input as InputAnt, Button as ButtonAnt } from 'antd';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 150px;
  margin-bottom: 40px;
`;

export const Logo = styled(Image)``;

export const Input = styled(InputAnt)`
  margin-bottom: 15px;
  width: 20%;
`;

export const Button = styled(ButtonAnt)``;
