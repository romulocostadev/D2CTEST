import styled from 'styled-components';

import { Form, Input, Button } from 'antd';

export const EdicaodeGenero = styled.div`
  background-color: #ffffff;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 80px 16px 80px;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
  width: 100%;
  padding-bottom: 24px;
  justify-content: space-between;
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
  margin-bottom: 0px;
`;

export const Border = styled.div`
  align-self: stretch;
  width: auto;
  height: 4px;
  background-color: #363434;
`;

export const ViceriForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  width: auto;
  padding-top: 36px;
  padding-bottom: 24px;
`;

export const Nome = styled(Form.Item)`
  margin-bottom: 0px;
  width: 320px;
  height: auto;
`;

export const InputNome = styled(Input)`
  width: 320px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: auto;
  height: auto;
  padding-top: 16px;
`;

export const ButtonSalvar = styled(Button)`
  padding: 0;
  width: 97px;
  height: 32px;
  border-radius: 2px;
  font-family: 'SF Pro Text';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  background: #353333;
  color: #ffffff;
  border: none;
`;

export const ButtonCancelar = styled(Button)`
  padding: 0;
  width: 97px;
  height: 32px;
  border-radius: 2px;
  font-family: 'SF Pro Text';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  background: #fff;
  color: black;
  border: 1px solid #d9d9d9;
`;
