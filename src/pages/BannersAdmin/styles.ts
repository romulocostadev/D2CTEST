import styled from 'styled-components';

import { Layout, Col, Space, Row, Form, Input, Select, Button } from 'antd';

export const BannersAdmin = styled(Layout)`
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
  gutter: [16.0, 0],
  justify: 'start',
})``;

export const DescricaoDiv = styled(Col).attrs({ md: 10, xs: 24 })``;

export const Descricao = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const Description = styled(Input)`
  width: 100%;
`;

export const ViceriForm = styled(Form)`
  /* width: 100%; */
  max-width: 1112px;
`;

export const TipoDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Tipodebanner = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const BannerType = styled(Select)`
  width: 100%;
`;

export const BannerTypeOption = styled(Select.Option)``;

export const StatusDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const StatusForm = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const Status = styled(Select)`
  width: 100%;
`;

export const StatusOption = styled(Select.Option)``;

export const ActionsDiv = styled(Row).attrs({
  gutter: [8.0, 0],
  align: 'bottom',
  justify: 'start',
})``;

export const SearchButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const ButtonClear = styled(Button)`
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
