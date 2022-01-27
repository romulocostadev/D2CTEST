import styled from 'styled-components';

import { Layout, Col, Row, Form, Input, Button, Space } from 'antd';

export const AjustarQuantidade = styled(Layout)`
  width: 580px;
  height: 526px;
  background-color: #ffffff;
  border: 1px solid #000;
  margin-top: 200px;
  margin-left: 200px;
`;

export const Body = styled(Col).attrs({ xs: 24 })`
  padding-left: 24px;
  padding-right: 24px;
`;

export const Modal = styled(Col).attrs({
  xs: 24,
})`
  /* display: grid; */
  /* gap: 10%; */
  /* ${Body} {
    margin-top: 16px;
  }

  div + div {
    margin-bottom: 16px;
  } */

  /* div + :nth-child(2) {
    padding-top: 24px;
  }

  div + :nth-child(3) {
    padding-top: 24px;
  } */

  /* &:nth-child(1) {
    margin-top: 24px;
  } */
  /* &:nth-child(2) {
    margin-top: 24px;
  }
  &:nth-child(3) {
    margin-top: 24px;
  } */

  /* div:first-child > div:nth-of-type(1):first-line {
    background-color: blue;
  } */
`;

// export const Modal = styled(Space)`
//   display: flex;
//   flex-direction: column;
// `;

// export const Modal = styled.div``;

export const Teste = styled(Space).attrs({
  direction: 'vertical',
  size: 20,
  // align: 'center',
})`
  width: 100%;
`;

export const Header = styled(Col).attrs({ xs: 24 })`
  padding: 24px 24px 24px 24px;
  background-color: #f88f1f;
`;

export const Ajustarquantidade = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #fcfcff;
  text-align: left;
`;

export const MainInfo = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'space-between',
})``;

export const GrupoDiv = styled(Col).attrs({ md: 20, xs: 24 })``;

export const Grupo = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const Retornaonomedogrupo = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #36393a;
  text-align: left;
`;

export const Estoque = styled(Col).attrs({ md: 3, xs: 24 })``;

export const Estoqueatual = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const Retornaovaloratualdeestoquedogrupo = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #36393a;
  text-align: left;
`;

export const Produto = styled(Col).attrs({ xs: 24 })``;

export const InputLabel = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputProduto = styled(Input)`
  width: 100%;
`;

export const Actions = styled(Row).attrs({
  gutter: [16.0, 16.0],
  justify: 'space-between',
})`
  padding-left: 24px;
  padding-bottom: 24px;
  padding-right: 24px;
`;

export const CancelarDiv = styled(Col).attrs({ md: 10, xs: 24 })``;

export const ButtonCancelar = styled(Button)`
  padding: 0;
  width: 238px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const AplicarDiv = styled(Col).attrs({ md: 11, xs: 24 })``;

export const ButtonAplicar = styled(Button)`
  padding: 0;
  width: 258px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
