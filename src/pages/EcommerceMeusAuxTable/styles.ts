import styled from 'styled-components';

import { Layout, Col, Space, Row, Button } from 'antd';

export const EcommerceMeusPedidosVol = styled(Layout)`
  min-width: 100vw;
  /* min-height: 100vh; */
  background-color: #f6f6f6;
`;

export const Contentarea = styled(Col).attrs({ md: 24, xs: 24 })``;

export const ContentareaSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const PageheaderWrapper = styled(Row).attrs({
  justify: 'start',
})``;

export const Pageheader = styled(Col).attrs({ md: 24, xs: 24 })`
  padding: 16px 40px 16px 40px;
  background-color: #f88f1f;
`;

export const PageheaderSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const MainInfo = styled(Row).attrs({
  justify: 'start',
})``;

export const PageHeaderTitle = styled(Col).attrs({ md: 24, xs: 24 })``;

export const PageHeaderTitleSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 4.0,
})`
  width: 100%;
`;
export const Title = styled.h1`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  text-align: start;
`;

export const Subtitle = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  text-align: start;
`;

// export const BreadcrumbLink = styled(Row).attrs({
//   gutter: [4.0, 0],
//   justify: 'space-between',
// })``;

export const BreadcrumbSeparator = styled(Row).attrs({
  gutter: [10.0, 0],
  justify: 'space-between',
})`
  padding-left: 8px;
  padding-right: 8px;
`;

export const BreadcrumbLink = styled(Row)``;

export const BreadcrumbText = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  text-align: left;
`;

export const BottomInfo = styled(Row).attrs({
  justify: 'end',
})``;

export const KeepBuying = styled(Button)`
  padding: 0;
  width: 167px;
  height: 32px;
  border-radius: 4px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
`;

export const TabBody = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'space-between',
})`
  padding-left: 40px;
  padding-right: 40px;
`;
