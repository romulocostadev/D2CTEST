import styled from 'styled-components';

import { Layout, Col, Row } from 'antd';

export const EffectsShadow = styled(Layout)`
  row-gap: 10px;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: #ffffff;
`;
export const ShadowWrapper = styled.div`
  display: flex;
  height: 320px;
  width: 320px;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
`;
export const InnerShadow = styled(Row).attrs({})`
  width: 320px;
  background-color: #f88f1f;
  height: 50px;
  box-shadow: 10px 10px 16px rgba(0, 0, 0, 0.5);
`;
export const DropShadow = styled(Row).attrs({})`
  width: 320px;
  background-color: #f88f1f;
  height: 50px;
  box-shadow: inset 10px 10px 16px rgba(0, 0, 0, 0.5);
`;
export const LayerBlur = styled(Row).attrs({})`
  width: 320px;
  height: 50px;
  background-color: #f88f1f;
  filter: blur(16px);
`;
