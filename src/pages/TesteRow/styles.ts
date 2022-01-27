import styled from 'styled-components';

import { Row, Col, Layout } from 'antd';

export const TesteVeiling = styled(Layout)`
  min-height: 100vh;
  min-width: 100vw;
`;

export const TopContainer = styled(Row)`
  height: 150px;
  background-color: #e43030;
`;

export const CenterContainer = styled(Row)`
  flex: auto;
  background-color: aquamarine;
`;

export const CenterLeftContainer = styled(Col).attrs({
  sm: 24,
  xl: 12,
})`
  background-color: #434343;
`;

export const CenterRightContainer = styled(Col).attrs({
  sm: 24,
  xl: 12,
})`
  background-color: #006fbf;
`;

export const FooterContainer = styled(Row)`
  height: 150px;
  background-color: #1aa503;
`;

// import styled from 'styled-components';

// import { Layout, Row, Col, Form, Input } from 'antd';

// export const TesteVeiling = styled(Layout)`
//   min-width: 100vw;
//   min-height: 100vh;
//   background-color: #ffffff;
// `;

// export const TopContainer = styled(Row)`
//   display: flex;
//   flex-direction: row;
//   align-self: stretch;
//   width: auto;
//   height: 150px;
//   background-color: #e43030;
// `;

// export const CenterContainer = styled(Row).attrs({
//   xl: 24,
// })`
//   /* display: flex;
//   flex-direction: row;
//   align-self: stretch;
//   flex-grow: 1;
//   width: auto; */
//   height: 100%;
//   background-color: #1c9595;
// `;

// export const CenterLeftContainer = styled(Col).attrs({
//   xl: 12,
//   // sm: 6,
// })`
//   /* display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 10px;
//   flex-grow: 1;
//   height: 600px; */
//   /* width: 1079px; */
//   padding: 10px 10px 10px 10px;
// `;

// export const Row01 = styled(Row).attrs({
//   gutter: 16,
// })`
//   /* display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   gap: 16px;
//   align-self: stretch; */
//   /* width: auto; */
//   /* height: 46px; */
// `;

// export const Frame433 = styled(Col).attrs({
//   xl: 6,
//   sm: 12,
//   xs: 24,
// })`
//   /* display: flex;
//   flex-direction: column; */
//   /* height: auto; */
//   /* width: auto; */
// `;

// export const Codigo = styled(Form.Item)`
//   margin-bottom: 0px;
//   /* width: 300px; */
//   height: 46px;
// `;

// export const InputCodigo = styled(Input)`
//   width: 100%;
// `;

// export const CenterRightContainer = styled(Col).attrs({
//   xl: 12,
//   // sm: 6,
// })`
//   /* display: flex;
//   flex-direction: column;
//   gap: 10px;
//   align-self: stretch;
//   height: auto;
//   padding: 10px 10px 10px 10px; */
//   background-color: #006fbf;
//   /* width: 379px; */
// `;

// export const FooterContainer = styled(Row)`
//   /* display: flex;
//   flex-direction: row;
//   align-self: stretch;
//   width: auto; */
//   height: 150px;
//   background-color: #1aa503;
// `;
