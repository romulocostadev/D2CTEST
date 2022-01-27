import styled from 'styled-components';

import { Layout, Col, Space, Row, Button } from 'antd';

export const ModalCompositionCancel = styled(Row)`
  width: 400px;
  height: 210px;
  padding: 32px 32px 24px 32px;
  background-color: #ffffff;
  border: 1px solid black;
`;

export const TextWrapper = styled(Col).attrs({ md: 21, xs: 24 })``;

export const IconWrapper = styled(Col).attrs({ md: 3, xs: 24 })``;

export const TextWrapperSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ModalTitle = styled(Row)``;

export const ModalTitleText = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #272727;
  text-align: left;
`;

export const ModalBody = styled(Row)``;

export const ModalBodyText = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #272727;
  text-align: left;
`;

export const ModalActions = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'end',
})`
  padding-top: 16px;
`;

export const ButtonClose = styled(Button)`
  padding: 0;
  width: 75px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const ButtonCancelComposition = styled(Button)`
  padding: 0;
  width: 168px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
`;
