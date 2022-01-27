import styled from 'styled-components';

import { Form, Input, Button } from 'antd';

export const ListadeGeneros = styled.div`
  background-color: #ffffff;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 80px 16px 80px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
  width: auto;
  padding-bottom: 24px;
`;

export const Path = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  width: auto;
  height: 22px;
`;

export const PageName = styled.h1`
  font-family: 'SF Pro Display';
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #5a5a5a;
  text-align: left;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: auto;
`;

export const Title = styled.h1`
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #363434;
  text-align: left;
`;

export const Border = styled.div`
  align-self: stretch;
  width: auto;
  height: 4px;
  background-color: #363434;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  width: auto;
  height: 64px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const InputPesquisar = styled(Input)`
  width: 320px;
`;

export const ButtonBuscar = styled(Button)`
  padding: 0;
  width: 78px;
  height: 32px;
  border-radius: 2px;
  font-family: 'SF Pro Text';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Spacer = styled.div`
  flex: 1;
`;
export const ButtonAdicionar = styled(Button)`
  padding: 0;
  width: 94px;
  height: 32px;
  border-radius: 2px;
  font-family: 'SF Pro Text';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Anchor = styled(Button)`
  padding: 0px;
`;
