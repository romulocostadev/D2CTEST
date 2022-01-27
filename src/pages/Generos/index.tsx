import React, { useState, useEffect } from 'react';

import { Table, Space } from 'antd';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useCroods } from 'croods';
import history from '../../services/history';

import db from '../../config/db';

import {
  ListadeGeneros,
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
  Anchor,
} from './styles';

const { Column } = Table;

const GenerosPage = () => {
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

  useEffect(() => {
    db.connect().then(async (models: any) => {
      const generos = await models.generos.all();
      console.log(generos);
      setListGeneros(generos);
    });
  }, []);

  function buscar() {
    console.log('oi');
  }

  function adicionar() {
    history.push('/genero');
  }

  async function remove(id: any) {
    console.log(Number(id));
    // await db.table('generos').delete(Number(id));
  }

  return (
    <ListadeGeneros>
      <Page>
        <Header>
          <Path />
          <PageName>Lista de Gêneros</PageName>
        </Header>
        <Section>
          <Title>Gêneros</Title>
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
        <Table bordered dataSource={listGeneros}>
          <Column
            title="Descricao"
            dataIndex="Descricao"
            key="Descricao"
            align="left"
            showSorterTooltip={false}
            sorter={(a: any, b: any) => a.Descricao - b.Descricao}
          />
          <Column
            title="Ações"
            key="acoes"
            width="100px"
            align="center"
            render={(text, record: any) => (
              <Space>
                <Anchor
                  type="text"
                  onClick={() => history.push(`genero/${record.id}`)}
                >
                  <EditOutlined style={{ color: '#262626', marginRight: 10 }} />
                </Anchor>
                <Anchor type="text" onClick={() => remove(record.id)}>
                  <DeleteOutlined style={{ color: '#262626' }} />
                </Anchor>
              </Space>
            )}
          />
        </Table>
      </Page>
    </ListadeGeneros>
  );
};

export default GenerosPage;
