import styled from 'styled-components';

import {
  Form,
  Select,
  Button,
  Input,
  DatePicker,
  Menu as MenuAntd,
  Tabs as TabsAntd,
} from 'antd';

const { SubMenu: SubMenuAntd } = MenuAntd;

const { RangePicker } = DatePicker;

const { TabPane: TabPaneAntd } = TabsAntd;

export const Tabs = styled(TabsAntd)``;
export const TabPane = styled(TabPaneAntd)``;

export const TesteVeiling = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  background-color: #fff;
  padding: 24px;
`;

export const ViceriForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  /* align-self: stretch; */
  /* flex-grow: 0; */
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  padding: 24px;
  border-radius: 8px;
`;

export const Section01 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  flex-grow: 0;
  padding-left: 16px;
  padding-right: 16px;
`;

export const RazaoSocial = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  height: 100%;
  width: 423px;
`;

export const SelectInput01 = styled(Select)`
  width: 100%;
`;

export const ButtonFiscal = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const Section02 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  flex-grow: 0;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Row01 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 16px;
  align-self: stretch;
  flex-grow: 0;
`;

export const Codigo = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-grow: 0;
`;

export const InputCodigo = styled(Input)`
  width: 100%;
`;

export const InputRazaoSocial = styled(Input)`
  width: 100%;
`;

export const Nome = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-grow: 0;
`;

export const InputNome = styled(Input)`
  width: 100%;
`;

export const Arrendado = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-grow: 0;
`;

export const SelectArrendado = styled(Select)`
  width: 100%;
`;

export const SelectOption = styled(Select.Option)``;

export const Validadedocontrato = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  width: 548px;
`;

export const ValidadeContrato = styled(RangePicker)``;

export const Row02 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 16px;
  align-self: stretch;
  flex-grow: 0;
`;

export const CEP = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  height: 100%;
  width: 125px;
`;

export const InputCep = styled(Input)`
  width: 100%;
`;

export const Endereco = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  height: 100%;
  width: 407px;
`;

export const InputEndereco = styled(Input)`
  width: 100%;
`;

export const Numero = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  height: 100%;
  width: 125px;
`;

export const InputNumero = styled(Input)`
  width: 100%;
`;

export const Bairro = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  height: 100%;
  width: 266px;
`;

export const InputBairro = styled(Input)`
  width: 100%;
`;

export const Complemento = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  width: 125px;
`;

export const InputComplemento = styled(Input)`
  width: 100%;
`;

export const Row03 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 16px;
  align-self: stretch;
  flex-grow: 0;
`;

export const SelectEstado = styled(Select)`
  width: 100%;
`;

export const SelectCidade = styled(Select)`
  width: 100%;
`;

export const InputCoodenada1 = styled(Input)`
  width: 100%;
`;

export const InputCoodenada2 = styled(Input)`
  width: 100%;
`;

export const ButtonAnexar = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: 'SF Pro Text';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Section03 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  flex-grow: 0;
  padding-left: 16px;
  padding-right: 16px;
`;

export const InputLabel = styled(Form.Item)`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  height: 100%;
  width: 266px;
`;

export const InputBasic = styled(Input)`
  width: 100%;
`;

export const AddButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const Section04 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  flex-grow: 0;
  padding-left: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
`;

export const Menu = styled(MenuAntd)`
  width: 248px;
  background-color: #f78e1e;
`;
export const MenuItem = styled(MenuAntd.Item)`
  /* color: #fff; */
`;
export const SubMenu = styled(SubMenuAntd)`
  /* color: #fff; */
`;

export const MasterTabs = styled.div`
  width: 100%;
  height: 48px;
  /* background-color: red; */
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 3px 6px -4px rgba(0, 0, 0, 0.12);
  filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.08));
`;

export const WrapperPage = styled.div``;

export const MenuText = styled.span``;

export const PageActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: stretch;
  flex-grow: 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  align-self: stretch;
  flex-grow: 1;
`;

export const BackButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const SaveButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const HelpButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;
