import styled from 'styled-components';

import { Layout, Col, Space, Form, Select, Input, Row, Button } from 'antd';

export const AlertaPLP = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #ffffff;
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
export const ViceriForm = styled(Form)``;

export const FormDiv = styled(Row).attrs({
  gutter: [16.0, 0],
})`
  width: 100%;
  align-items: end;
`;

export const CategoriaDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Categoria = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const SelectCategory = styled(Select)`
  width: 100%;
`;

export const SelectCategoryOption = styled(Select.Option)``;

export const PorcentagemAbaixoDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const PercentageLess = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputPercentageLess = styled(Input)`
  width: 100%;
`;

export const PorcentagemAcimaDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const PercentageMore = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputPercentageMore = styled(Input)`
  width: 100%;
`;

export const FormActions = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const SaveButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;
