import React, { useState, useEffect } from 'react';

import { Table, Space } from 'antd';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useCroods } from 'croods';
import history from '../../services/history';

import {
  ListadePessoas,
  Page,
  Header,
  Path,
  PageName,
  Section,
  Title,
  Border,
  Filter,
  InputPesquisar,
  ButtonBuscar,
  Spacer,
  ButtonAdicionar,
} from './styles';

const { Column } = Table;

const PessoasPage = () => {
  const [
    { saveError: saveErrorPessoas, list: listPessoas },
    {
      fetch: fetchPessoas,
      save: savePessoas,
      destroy: destroyPessoas,
      setInfo: setInfoPessoas,
      setList: setListPessoas,
    },
  ] = useCroods({ name: 'Pessoas' });

  useEffect(() => {
    fetchPessoas({ customPath: '/api/Pessoas' })();
    setListPessoas([{ Id: 1, Nome: 'Romulo Costa', Cpf: '092.311.716-40' }]);
  }, []);

  function buscar() {
    console.log('oi');
  }

  function adicionar() {
    history.push('/pessoa');
  }

  return (
    <ListadePessoas>
      <Page>
        <Header>
          <Path />
          <PageName>Lista de Pessoas</PageName>
        </Header>
        <Section>
          <Title>Pessoas</Title>
          <Border />
        </Section>
        <Filter>
          <InputPesquisar />
          <ButtonBuscar ghost type="primary" onClick={buscar}>
            Buscar
          </ButtonBuscar>
          <Spacer />
          <ButtonAdicionar type="primary" onClick={adicionar}>
            Adicionar
          </ButtonAdicionar>
        </Filter>
        <Table bordered dataSource={listPessoas}>
          <Column
            title="Nome"
            dataIndex="Nome"
            key="Nome"
            align="left"
            showSorterTooltip={false}
            sorter={(a: any, b: any) => a.Nome - b.Nome}
          />
          <Column
            title="Cpf"
            dataIndex="Cpf"
            key="Cpf"
            width="200px"
            align="left"
            showSorterTooltip={false}
            sorter={(a: any, b: any) => a.Cpf - b.Cpf}
          />
          <Column
            title="Ações"
            key="acoes"
            width="100px"
            align="center"
            render={(text, record: any) => (
              <Space>
                <a href={`pessoa/${record.Id}`}>
                  <EditOutlined style={{ color: '#262626', marginRight: 10 }} />
                </a>
                <a href="/">
                  <DeleteOutlined style={{ color: '#262626' }} />
                </a>
              </Space>
            )}
          />
        </Table>
      </Page>
    </ListadePessoas>
  );
};

export default PessoasPage;
