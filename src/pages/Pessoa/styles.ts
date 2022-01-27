import styled from 'styled-components';

import { Form, Input, Select, DatePicker, Button } from 'antd';

export const EdicaodePessoa = styled.div`
  background-color: #ffffff;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 80px 16px 80px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
  width: auto;
  padding-bottom: 24px;
`;

export const Path = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  width: auto;
  height: 22px;
`;

export const PageName = styled.h1`
  font-family: 'SF Pro Display';
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #5a5a5a;
  text-align: left;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: auto;
`;

export const Title = styled.h1`
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #363434;
  text-align: left;
`;

export const Border = styled.div`
  align-self: stretch;
  width: auto;
  height: 4px;
  background-color: #5a5a5a;
`;

export const Stepper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  width: auto;
  height: 42px;
`;

export const ViceriForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  width: auto;
  padding-top: 16px;
  padding-bottom: 24px;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-self: stretch;
  width: auto;
`;

export const Steps11 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: auto;
  height: auto;
`;

export const DadosPessoais = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 99px;
`;

export const Dados = styled.h1`
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #363434;
  text-align: left;
  margin-bottom: 0px !important;
`;

export const Border1 = styled.div`
  align-self: stretch;
  width: auto;
  height: 1px;
  background-color: #5a5a5a;
`;

export const Line1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-self: stretch;
  width: auto;
  height: 70px;
  padding-top: 16px;
`;

export const Nome = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 520px;
`;

export const InputNome = styled(Input)`
  width: 100%;
`;

export const Genero = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 120px;
`;

export const SelectGenero = styled(Select)`
  width: 100%;
`;

export const SelectOption = styled(Select.Option)``;

export const EstadoCivil = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 120px;
`;

export const SelectEstadoCivil = styled(Select)`
  width: 100%;
`;

export const CPF = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 200px;
`;

export const InputCpf = styled(Input)`
  width: 200px;
`;

export const DataNascimento = styled(Form.Item)`
  margin-bottom: 0px;
  height: 54px;
  width: 160px;
`;

export const DataNascimentoPicker = styled(DatePicker)`
  width: 100%;
`;

export const Idade = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 60px;
`;

export const InputIdade = styled(Input)`
  width: 60px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
  align-self: stretch;
  flex-grow: 1;
  width: auto;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const ButtonVoltar = styled(Button)`
  padding: 0;
  width: 71px;
  height: 32px;
  border-radius: 2px;
  font-family: 'SF Pro Text';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const ButtonAvancar = styled(Button)`
  padding: 0;
  width: 85px;
  height: 32px;
  border-radius: 2px;
  font-family: 'SF Pro Text';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const DadosdoConjuge = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 99px;
`;

export const DadosConj = styled.h1`
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #363434;
  text-align: left;
`;

export const Border2 = styled.div`
  align-self: stretch;
  width: auto;
  height: 1px;
  background-color: #5a5a5a;
`;

export const Line111 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-self: stretch;
  width: auto;
  height: 70px;
  padding-top: 16px;
`;

export const NomeConjuge = styled(Form.Item)`
  margin-bottom: 0px;
  width: 1020px;
`;

export const InputNomeConjuge = styled(Input)`
  width: 100%;
`;

export const DataNascimentoConjuge = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 160px;
`;

export const DataNascimentoConjugePicker = styled(DatePicker)`
  width: 100%;
`;

export const IdadeConjuge = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 60px;
`;

export const InputIdadeConjuge = styled(Input)`
  width: 100%;
`;

export const OutrasInformacoes = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 99px;
`;

export const OutrasInfo = styled.h1`
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #363434;
  text-align: left;
`;

export const BorderInfo = styled.div`
  align-self: stretch;
  width: auto;
  height: 1px;
  background-color: #5a5a5a;
`;

export const Line112 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-self: stretch;
  width: auto;
  height: 70px;
  padding-top: 16px;
`;

export const Sutability = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 100%;
`;

export const SelectSuitability = styled(Select)`
  width: 100%;
`;

export const Declaracao = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 100%;
`;

export const SelectDeclaracao = styled(Select)`
  width: 100%;
`;

export const RegimeBens = styled(Form.Item)`
  margin-bottom: 0px;
  height: auto;
  width: 100%;
`;

export const SelectRegimeBens = styled(Select)`
  width: 100%;
`;
