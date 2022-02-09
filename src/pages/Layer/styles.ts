import styled from 'styled-components';

import { Layout, Col, Row } from 'antd';

export const Layer = styled(Layout)`
  row-gap: 10px;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  opacity: 0;
`;
export const LayerWrapper = styled.div`
  display: flex;
  height: 320px;
  width: 320px;
  flex-direction: column;
  row-gap: 67px;
`;
export const ROW01 = styled(Row).attrs({})`
  width: 320px;
`;
export const BOX01 = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  flex-direction: column;
  align-items: center;
  background-color: #f88f1f;
  mix-blend-mode: normal;
  opacity: 0;
`;
export const BOX02 = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  flex-direction: column;
  align-items: center;
  background-color: #f88f1f;
  mix-blend-mode: normal;
  opacity: 0;
`;
export const ROW02 = styled(Row).attrs({
  justify: 'space-between',
})`
  width: 320px;
`;
export const BOX03 = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  flex-direction: column;
  align-items: center;
  background-color: #f8981e;
  mix-blend-mode: normal;
  opacity: 0;
`;
export const BOX04 = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  flex-direction: column;
  align-items: center;
  background-color: #f88f1f;
  mix-blend-mode: difference;
  opacity: 1;
`;
