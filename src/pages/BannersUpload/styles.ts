import styled from 'styled-components';

import { Layout, Col, Space, Form, Row, Input, Select } from 'antd';

export const BannersUpload = styled(Layout)`
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
export const ViceriForm = styled(Form)``;

export const FormWrapper = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'start',
})``;

export const DescricaoDiv = styled(Col).attrs({ md: 18, xs: 24 })``;

export const Descricao = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const Description = styled(Input)`
  width: 100%;
`;

export const TipoDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Tipodebanner = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const TypeBanner = styled(Select)`
  width: 100%;
`;

export const TypeBannerOption = styled(Select.Option)``;

export const DragDropBody = styled(Row).attrs({
  //   justify: 'start',
})`
  width: 100%;
`;
