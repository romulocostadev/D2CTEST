import styled from 'styled-components';

import { Layout, Col, Space, Form, Input, DatePicker, Row, Button } from 'antd';

export const OfertaLKP = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #fcfcff;
`;

export const Card = styled(Col).attrs({ xs: 24 })`
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  border: 1px solid #dadada;
  border-radius: 8px;
`;

export const CardSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const FormWrapper = styled(Row).attrs({
  gutter: [16, 0],
})``;

export const ViceriForm = styled(Form)`
  width: 878px;
`;

export const ChaveDiv = styled(Col).attrs({ md: 15, xs: 24 })``;

export const ChaveRazaosocialNomefantasia = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputEnterpriseName = styled(Input)`
  width: 100%;
`;

export const SemanaDiv = styled(Col).attrs({ md: 7, xs: 24 })``;

export const SemanaAno = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const PeekWeekYear = styled(DatePicker)`
  width: 100%;
`;

export const ActionsDiv = styled(Row).attrs({
  align: 'bottom',
  justify: 'start',
})``;

export const FilterButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const TableBody = styled(Row).attrs({
  justify: 'start',
})``;
