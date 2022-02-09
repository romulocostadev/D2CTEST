import styled from 'styled-components';

import { Layout, Col, Row } from 'antd';

export const ResizingFixedeAutoLayoutGap = styled(Layout)`
  width: 400px;
  height: 400px;
  background-color: red;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ResizingFixedWrapper = styled(Col).attrs({ xs: 24 })`
  display: flex;
  flex: 1;
  height: 320px;
  width: 320px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  background-color: blue;
`;
export const ROW01 = styled(Row).attrs({
  gutter: [10.0, 0],
  justify: 'space-between',
})`
  width: 320px;
  /* height: 72.5px; */
  flex: 1;
  display: flex;
  background-color: #36393a;
`;
export const ROW02 = styled(Row).attrs({
  gutter: [10.0, 0],
  justify: 'space-between',
})`
  width: 320px;
  /* height: 72.5px; */
  flex: 1;
  display: flex;
  background-color: #36393a;
`;
export const ROW03 = styled(Row).attrs({
  gutter: [10.0, 0],
  justify: 'space-between',
})`
  width: 320px;
  /* height: 72.5px; */
  flex: 1;
  display: flex;
  background-color: #36393a;
`;
export const ROW04 = styled(Row).attrs({
  gutter: [10.0, 0],
  justify: 'space-between',
})`
  width: 320px;
  /* height: 72.5px; */
  flex: 1;
  display: flex;
  background-color: #36393a;
`;
