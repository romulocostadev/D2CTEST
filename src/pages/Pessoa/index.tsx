import React, { useState, useEffect } from 'react';

import { useCroods } from 'croods';

import {
  EdicaodePessoa,
  Page,
  Header,
  Path,
  PageName,
  Section,
  Title,
  Border,
  Stepper,
  ViceriForm,
  Fields,
  Steps11,
  DadosPessoais,
  Dados,
  Border1,
  Line1,
  Nome,
  InputNome,
  Genero,
  SelectGenero,
  SelectOption,
  EstadoCivil,
  SelectEstadoCivil,
  CPF,
  InputCpf,
  DataNascimento,
  Idade,
  InputIdade,
  Actions,
  ButtonVoltar,
  ButtonAvancar,
  DataNascimentoPicker,
  DadosdoConjuge,
  DadosConj,
  Border2,
  Line111,
  NomeConjuge,
  InputNomeConjuge,
  DataNascimentoConjuge,
  DataNascimentoConjugePicker,
  IdadeConjuge,
  InputIdadeConjuge,
  OutrasInformacoes,
  OutrasInfo,
  BorderInfo,
  Line112,
  Sutability,
  SelectSuitability,
  Declaracao,
  SelectDeclaracao,
  RegimeBens,
  SelectRegimeBens,
} from './styles';

const PessoaPage = () => {
  const [
    { saveError: saveErrorPessoa, list: listPessoa },
    {
      fetch: fetchPessoa,
      save: savePessoa,
      destroy: destroyPessoa,
      setInfo: setInfoPessoa,
      setList: setListPessoa,
    },
  ] = useCroods({ name: 'Pessoa' });
  const [
    { saveError: saveErrorGeneros, list: listGeneros },
    {
      fetch: fetchGeneros,
      save: saveGeneros,
      destroy: destroyGeneros,
      setInfo: setInfoGeneros,
      setList: setListGeneros,
    },
  ] = useCroods({ name: 'Generos' });
  const [
    { saveError: saveErrorEstadosCivis, list: listEstadosCivis },
    {
      fetch: fetchEstadosCivis,
      save: saveEstadosCivis,
      destroy: destroyEstadosCivis,
      setInfo: setInfoEstadosCivis,
      setList: setListEstadosCivis,
    },
  ] = useCroods({ name: 'EstadosCivis' });
  const [
    { saveError: saveErrorSuitabilities, list: listSuitabilities },
    {
      fetch: fetchSuitabilities,
      save: saveSuitabilities,
      destroy: destroySuitabilities,
      setInfo: setInfoSuitabilities,
      setList: setListSuitabilities,
    },
  ] = useCroods({ name: 'Suitabilities' });
  const [
    { saveError: saveErrorTiposDeclaracao, list: listTiposDeclaracao },
    {
      fetch: fetchTiposDeclaracao,
      save: saveTiposDeclaracao,
      destroy: destroyTiposDeclaracao,
      setInfo: setInfoTiposDeclaracao,
      setList: setListTiposDeclaracao,
    },
  ] = useCroods({ name: 'TiposDeclaracao' });
  const [
    { saveError: saveErrorTiposRegimeBens, list: listTiposRegimeBens },
    {
      fetch: fetchTiposRegimeBens,
      save: saveTiposRegimeBens,
      destroy: destroyTiposRegimeBens,
      setInfo: setInfoTiposRegimeBens,
      setList: setListTiposRegimeBens,
    },
  ] = useCroods({ name: 'TiposRegimeBens' });
  const [
    { saveError: saveErrorParentescos, list: listParentescos },
    {
      fetch: fetchParentescos,
      save: saveParentescos,
      destroy: destroyParentescos,
      setInfo: setInfoParentescos,
      setList: setListParentescos,
    },
  ] = useCroods({ name: 'Parentescos' });
  const [
    { saveError: saveErrorTiposContratacao, list: listTiposContratacao },
    {
      fetch: fetchTiposContratacao,
      save: saveTiposContratacao,
      destroy: destroyTiposContratacao,
      setInfo: setInfoTiposContratacao,
      setList: setListTiposContratacao,
    },
  ] = useCroods({ name: 'TiposContratacao' });
  const [
    { saveError: saveErrorTiposSeguro, list: listTiposSeguro },
    {
      fetch: fetchTiposSeguro,
      save: saveTiposSeguro,
      destroy: destroyTiposSeguro,
      setInfo: setInfoTiposSeguro,
      setList: setListTiposSeguro,
    },
  ] = useCroods({ name: 'TiposSeguro' });
  const [
    { saveError: saveErrorSeguradoras, list: listSeguradoras },
    {
      fetch: fetchSeguradoras,
      save: saveSeguradoras,
      destroy: destroySeguradoras,
      setInfo: setInfoSeguradoras,
      setList: setListSeguradoras,
    },
  ] = useCroods({ name: 'Seguradoras' });
  const [
    { saveError: saveErrorTiposAtivo, list: listTiposAtivo },
    {
      fetch: fetchTiposAtivo,
      save: saveTiposAtivo,
      destroy: destroyTiposAtivo,
      setInfo: setInfoTiposAtivo,
      setList: setListTiposAtivo,
    },
  ] = useCroods({ name: 'TiposAtivo' });
  const [
    { saveError: saveErrorObjetivos, list: listObjetivos },
    {
      fetch: fetchObjetivos,
      save: saveObjetivos,
      destroy: destroyObjetivos,
      setInfo: setInfoObjetivos,
      setList: setListObjetivos,
    },
  ] = useCroods({ name: 'Objetivos' });
  const [
    { saveError: saveErrorTiposPassivo, list: listTiposPassivo },
    {
      fetch: fetchTiposPassivo,
      save: saveTiposPassivo,
      destroy: destroyTiposPassivo,
      setInfo: setInfoTiposPassivo,
      setList: setListTiposPassivo,
    },
  ] = useCroods({ name: 'TiposPassivo' });
  const [
    { saveError: saveErrorTiposRecebimento, list: listTiposRecebimento },
    {
      fetch: fetchTiposRecebimento,
      save: saveTiposRecebimento,
      destroy: destroyTiposRecebimento,
      setInfo: setInfoTiposRecebimento,
      setList: setListTiposRecebimento,
    },
  ] = useCroods({ name: 'TiposRecebimento' });

  useEffect(() => {
    fetchPessoa({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchGeneros({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchEstadosCivis({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchSuitabilities({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchTiposDeclaracao({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchTiposRegimeBens({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchParentescos({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchTiposContratacao({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchTiposSeguro({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchSeguradoras({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchTiposAtivo({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchObjetivos({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchTiposPassivo({ customPath: 'teste' })();
  }, []);
  useEffect(() => {
    fetchTiposRecebimento({ customPath: 'teste' })();
  }, []);

  function teste() {
    fetchPessoa({ customPath: '/api/EstadosCivis' })({});
  }

  function voltar() {
    console.log('voltar');
  }

  function avancar() {
    console.log('voltar');
  }

  const list = [
    {
      id: 1,
      Desc: 'Desc',
    },
  ];

  return (
    <EdicaodePessoa>
      <Page>
        <Header>
          <Path />
          <PageName>Edição de Pessoa</PageName>
        </Header>
        <Section>
          <Title>Informações Pessoais</Title>
          <Border />
        </Section>
        <Stepper />
        <ViceriForm onFinish={teste} layout="vertical">
          <Fields>
            <Steps11>
              <DadosPessoais>
                <Dados>Dados Pessoais</Dados>
                <Border1 />
                <Line1>
                  <Nome
                    label="Nome"
                    name="nome"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <InputNome />
                  </Nome>
                  <Genero label="Gênero" name="genero">
                    <SelectGenero>
                      {listGeneros.map(l => (
                        <SelectOption key={l.id} value={l.id}>
                          {l.Descricao}
                        </SelectOption>
                      ))}
                    </SelectGenero>
                  </Genero>
                  <EstadoCivil
                    label="Estado Civil"
                    name="estadocivil"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <SelectEstadoCivil>
                      {listEstadosCivis.map(l => (
                        <SelectOption key={l.id} value={l.descricao}>
                          {l.Descricao}
                        </SelectOption>
                      ))}
                    </SelectEstadoCivil>
                  </EstadoCivil>
                  <CPF
                    label="CPF"
                    name="cpf"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <InputCpf />
                  </CPF>
                  <DataNascimento
                    label="Data de Nascimento"
                    name="datanascimento"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <DataNascimentoPicker format="DD/MM/YYYY" />
                  </DataNascimento>
                  <Idade
                    label="Idade"
                    name="idade"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <InputIdade />
                  </Idade>
                </Line1>
              </DadosPessoais>
              <DadosdoConjuge>
                <DadosConj>Dados do Cônjuge</DadosConj>
                <Border2 />
                <Line111>
                  <NomeConjuge
                    label="Nome"
                    name="nomeconjuge"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <InputNomeConjuge />
                  </NomeConjuge>
                  <DataNascimentoConjuge
                    label="Data de Nascimento"
                    name="datanascimentoconjuge"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <DataNascimentoConjugePicker format="DD/MM/YYYY" />
                  </DataNascimentoConjuge>
                  <IdadeConjuge
                    label="Idade"
                    name="idadeconjuge"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <InputIdadeConjuge />
                  </IdadeConjuge>
                </Line111>
              </DadosdoConjuge>
              <OutrasInformacoes>
                <OutrasInfo>Outras Informações</OutrasInfo>
                <BorderInfo />
                <Line112>
                  <Sutability label="Suitability" name="sutability">
                    <SelectSuitability>
                      {list.map(l => (
                        <SelectOption key={l.id} value={l.id}>
                          {l.Desc}
                        </SelectOption>
                      ))}
                    </SelectSuitability>
                  </Sutability>
                  <Declaracao label="Declaração" name="declaracao">
                    <SelectDeclaracao>
                      {list.map(l => (
                        <SelectOption key={l.id} value={l.id}>
                          {l.Desc}
                        </SelectOption>
                      ))}
                    </SelectDeclaracao>
                  </Declaracao>
                  <RegimeBens label="Regime de Bens" name="regimebens">
                    <SelectRegimeBens>
                      {list.map(l => (
                        <SelectOption key={l.id} value={l.id}>
                          {l.Desc}
                        </SelectOption>
                      ))}
                    </SelectRegimeBens>
                  </RegimeBens>
                </Line112>
              </OutrasInformacoes>
            </Steps11>
          </Fields>
        </ViceriForm>
        <Actions>
          <ButtonVoltar ghost type="primary" onClick={voltar}>
            Voltar
          </ButtonVoltar>
          <ButtonAvancar type="primary" onClick={avancar}>
            Avançar
          </ButtonAvancar>
        </Actions>
      </Page>
    </EdicaodePessoa>
  );
};

export default PessoaPage;
