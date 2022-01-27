/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';

import { CheckOutlined } from '@ant-design/icons';
import { useCroods } from 'croods';
import Dexie from 'dexie';
import { useParams } from 'react-router-dom';
import { Form } from 'antd';
import history from '../../services/history';

import db from '../../config/db';

import {
  EdicaodeGenero,
  Page,
  Header,
  Path,
  PageName,
  Section,
  Title,
  Border,
  ViceriForm,
  Nome,
  InputNome,
  Actions,
  ButtonSalvar,
  ButtonCancelar,
} from './styles';

const GeneroPage = () => {
  const { id } = useParams<any>();
  const [form] = Form.useForm();
  const [
    { saveError: saveErrorGenero, list: listGenero },
    {
      fetch: fetchGenero,
      save: saveGenero,
      destroy: destroyGenero,
      setInfo: setInfoGenero,
      setList: setListGenero,
    },
  ] = useCroods({ name: 'Genero' });

  async function teste() {
    console.log('ok');
    // const bla = await db.table('generos').get(Number(id));
    // form.setFieldsValue({
    //   nome: bla.Descricao,
    // });
  }

  useEffect(() => {
    // fetchGenero({ customPath: '/api/EstadosCivis' })();
    if (id) {
      teste();
    }
  }, [id]);

  function salvar(values: any) {
    // db.table('generos').add({ Descricao: values.nome });
    // db.connect().then(async (models: any) => {
    //   await models.generos.create({
    //     Descricao: values.nome,
    //   });
    // });
    // history.push('/generos');
    db.connect().then(async (models: any) => {
      await models.users.create({
        email: 'blas',
      });
      // const results = await models.usersContacts.create([
      //   {
      //     userId: 1,
      //     firstName: 'TestFirst',
      //     lastName: 'TestLast',
      //     medical: {
      //       contactId: 10,
      //       hospitalId: 11,
      //     },
      //   },
      // ]);
    });
  }

  async function editar(values: any) {
    // await db.table('generos').update(Number(id), { Descricao: values.nome });
    history.push('/generos');
  }

  function cancelar() {
    history.push('/generos');
  }

  return (
    <EdicaodeGenero>
      <Page>
        <Header>
          <Path />
          <PageName>Edição de Gêneros</PageName>
        </Header>
        <Section>
          <Title>Gênero</Title>
          <Border />
        </Section>
        <ViceriForm
          layout="vertical"
          onFinish={id ? editar : salvar}
          form={form}
        >
          <Nome
            label="Nome"
            name="nome"
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <InputNome />
          </Nome>
          <Actions>
            <ButtonSalvar
              // icon={<CheckOutlined />}
              type="primary"
              htmlType="submit"
            >
              Salvar
            </ButtonSalvar>
            <ButtonCancelar onClick={cancelar}>Cancelar</ButtonCancelar>
          </Actions>
        </ViceriForm>
      </Page>
    </EdicaodeGenero>
  );
};

export default GeneroPage;
