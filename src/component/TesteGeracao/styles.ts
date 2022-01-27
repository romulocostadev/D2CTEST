import styled from 'styled-components';

import { Layout, Form, Space, Col, Row, Input, Button, Select } from 'antd';

export const AjustarQuantidade = styled(Layout)`
  width: 580px;
  padding-bottom: 24px;
  background-color: #ffffff;
  border: 1px solid #000;
  margin-top: 200px;
  margin-left: 200px;
`;

export const ViceriForm = styled(Form)``;

export const ViceriFormSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 24.0,
})`
  width: 100%;
`;
export const Header = styled(Col).attrs({ xs: 24 })`
  padding: 24px 24px 24px 24px;
  background-color: #f88f1f;
`;

export const Ajustarquantidade = styled.h1`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #fcfcff;
  text-align: left;
`;

export const Body = styled(Col).attrs({ xs: 24 })`
  padding-left: 24px;
  padding-right: 24px;
`;

export const BodySpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const MainInfo = styled(Row)``;

export const GrupoDiv = styled(Col).attrs({ md: 21, xs: 24 })``;

export const GrupoDivSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const Grupo = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const Retornaonomedogrupo = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #36393a;
  text-align: left;
`;

export const Estoque = styled(Col).attrs({ md: 3, xs: 24 })``;

export const EstoqueSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const Estoqueatual = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const Retornaovaloratualdeestoquedogrupo = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #36393a;
  text-align: left;
`;

export const Produto = styled(Col).attrs({ xs: 24 })``;

export const ProdutoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 10.0,
})`
  width: 100%;
`;
export const InputLabel = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputProduto = styled(Input)`
  width: 100%;
`;

export const Border = styled.div`
  border: 1px solid #dadada;
`;
export const Actions = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'space-between',
})`
  padding-left: 24px;
  padding-right: 24px;
`;

export const CancelarDiv = styled(Col).attrs({ md: 10, xs: 24 })``;

export const ButtonCancelar = styled(Button)`
  padding: 0;
  width: 238px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
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
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const AddButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const MinusButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const QualidadeDivSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 10.0,
})`
  width: 100%;
`;

export const Qualidade = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const SelectJustificativa = styled(Select)`
  width: 100%;
`;

export const SelectJustificativaOption = styled(Select.Option)``;

export const Line1 = styled(Row).attrs({
  gutter: [26.0, 0],
  align: 'bottom',
})``;

export const ButtonGroups = styled(Row)``;

export const GroupsColumn = styled(Col).attrs({ md: 4, xs: 24 })``;

export const QuantidadeDiv = styled(Col).attrs({ md: 9, xs: 24 })``;

export const QualidadeDiv = styled(Col).attrs({ md: 11, xs: 24 })``;

export const QuantidadeDivSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 10.0,
})`
  width: 100%;
`;
export const Quantidade = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const Justificativa = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputNumber = styled(Input)`
  width: 100%;
`;

export const SelectQualidade = styled(Select)`
  width: 100%;
`;

export const SelectQualidadeOption = styled(Select.Option)``;

export const JustificativaFormItem = styled(Col).attrs({ xs: 24 })``;

export const JustificativaFormItemSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 10.0,
})`
  width: 100%;
`;

export const JustificativaAlteracao = styled(Input.TextArea).attrs({
  showCount: true,
  maxLength: 100,
  placeholder: 'Justifique a alteração de quantidade...',
})``;
