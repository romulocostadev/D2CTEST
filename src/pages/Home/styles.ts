import styled from 'styled-components';

import { Form, Input, Select } from 'antd';

export const TesteVeiling = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 100vw;
  min-height: 100vh;
  padding: 40px 40px 40px 40px;
  background-color: #ffffff;
`;

export const Frame13 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-grow: 0;
  width: auto;
  height: auto;
`;

export const Frame11 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-grow: 0;
  width: 100%;
  height: 100%;
  /* background-color: #7c62ff; */
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: 0px;
  width: 320px;
`;

export const InputBasic = styled(Input)`
  width: 100%;
`;

export const SelectField = styled(Select)`
  width: 100%;
`;

export const SelectOption = styled(Select.Option)``;
