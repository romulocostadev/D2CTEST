import React, { useState, useEffect } from 'react';

import { Typography, Input } from 'antd';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import {
  AjustarQuantidade,
  ViceriForm,
  ViceriFormSpacing,
  Header,
  Ajustarquantidade,
  Body,
  BodySpacing,
  MainInfo,
  GrupoDiv,
  Grupo,
  GrupoDivSpacing,
  Retornaonomedogrupo,
  Estoque,
  EstoqueSpacing,
  Estoqueatual,
  Retornaovaloratualdeestoquedogrupo,
  Produto,
  ProdutoSpacing,
  InputLabel,
  InputProduto,
  QualidadeDivSpacing,
  Qualidade,
  Line1,
  ButtonGroups,
  AddButton,
  MinusButton,
  QualidadeDiv,
  SelectJustificativa,
  SelectJustificativaOption,
  Border,
  Actions,
  CancelarDiv,
  ButtonCancelar,
  AplicarDiv,
  ButtonAplicar,
  QuantidadeDiv,
  QuantidadeDivSpacing,
  Quantidade,
  InputNumber,
  GroupsColumn,
  SelectQualidade,
  SelectQualidadeOption,
  JustificativaFormItem,
  JustificativaFormItemSpacing,
  Justificativa,
  JustificativaAlteracao,
} from './styles';

const AjustarQuantidadePage = () => {
  const list = [
    {
      id: 1,
      Desc: 'foo',
    },
    {
      id: 2,
      Desc: 'faa',
    },
  ];

  function cancelar() {
    console.log('func');
  }

  function aplicar() {
    console.log('func');
  }

  function adicionar() {
    console.log('func');
  }

  function diminuir() {
    console.log('func');
  }

  return (
    <AjustarQuantidade>
      <ViceriForm layout="vertical">
        <ViceriFormSpacing>
          <Header>
            <Ajustarquantidade>Ajustar quantidade</Ajustarquantidade>
          </Header>
          <Body>
            <BodySpacing>
              <MainInfo>
                <GrupoDiv>
                  <GrupoDivSpacing>
                    <Grupo>Grupo:</Grupo>
                    <Retornaonomedogrupo>
                      01639.011 - Kalanchoe P11
                    </Retornaonomedogrupo>
                  </GrupoDivSpacing>
                </GrupoDiv>
                <Estoque>
                  <EstoqueSpacing>
                    <Estoqueatual>Estoque atual:</Estoqueatual>
                    <Retornaovaloratualdeestoquedogrupo>
                      20.000
                    </Retornaovaloratualdeestoquedogrupo>
                  </EstoqueSpacing>
                </Estoque>
              </MainInfo>
              <Produto>
                <ProdutoSpacing>
                  <InputLabel
                    label={<Typography.Text ellipsis>Produto:</Typography.Text>}
                    name="inputlabel"
                    rules={[
                      {
                        required: true,
                        message: 'Campo obrigatório',
                      },
                    ]}
                  >
                    <InputProduto />
                  </InputLabel>
                </ProdutoSpacing>
              </Produto>
              <Line1>
                <GroupsColumn>
                  <ButtonGroups>
                    <AddButton
                      type="primary"
                      icon={<PlusOutlined />}
                      onClick={adicionar}
                    />
                    <MinusButton
                      type="default"
                      icon={<MinusOutlined />}
                      onClick={diminuir}
                    />
                  </ButtonGroups>
                </GroupsColumn>
                <QuantidadeDiv>
                  <QuantidadeDivSpacing>
                    <Quantidade
                      label={
                        <Typography.Text ellipsis>Quantidade:</Typography.Text>
                      }
                      name="quantidade"
                      rules={[
                        {
                          required: true,
                          message: 'Campo obrigatório',
                        },
                      ]}
                    >
                      <InputNumber />
                    </Quantidade>
                  </QuantidadeDivSpacing>
                </QuantidadeDiv>
                <QualidadeDiv>
                  <QualidadeDivSpacing>
                    <Qualidade
                      label={
                        <Typography.Text ellipsis>Qualidade:</Typography.Text>
                      }
                      name="qualidade"
                      rules={[
                        {
                          required: true,
                          message: 'Campo obrigatório',
                        },
                      ]}
                    >
                      <SelectQualidade>
                        {list.map(option => (
                          <SelectQualidadeOption
                            key={option.id}
                            value={option.Desc}
                          >
                            {option.Desc}
                          </SelectQualidadeOption>
                        ))}
                      </SelectQualidade>
                    </Qualidade>
                  </QualidadeDivSpacing>
                </QualidadeDiv>
              </Line1>
              <JustificativaFormItem>
                <JustificativaFormItemSpacing>
                  <Justificativa
                    label={
                      <Typography.Text ellipsis>Justificativa:</Typography.Text>
                    }
                    name="justificativa"
                    rules={[
                      {
                        required: true,
                        message: 'Campo obrigatório',
                      },
                    ]}
                  >
                    <SelectJustificativa>
                      {list.map(option => (
                        <SelectJustificativaOption
                          key={option.id}
                          value={option.Desc}
                        >
                          {option.Desc}
                        </SelectJustificativaOption>
                      ))}
                    </SelectJustificativa>
                  </Justificativa>
                </JustificativaFormItemSpacing>
              </JustificativaFormItem>
              <JustificativaFormItem>
                <JustificativaFormItemSpacing>
                  <Justificativa
                    name="textArea"
                    rules={[
                      {
                        required: true,
                        message: 'Campo obrigatório',
                      },
                    ]}
                  >
                    <JustificativaAlteracao />
                  </Justificativa>
                </JustificativaFormItemSpacing>
              </JustificativaFormItem>
            </BodySpacing>
          </Body>
          <Border />
          <Actions>
            <CancelarDiv>
              <ButtonCancelar ghost type="primary" onClick={cancelar}>
                Cancelar
              </ButtonCancelar>
            </CancelarDiv>
            <AplicarDiv>
              <ButtonAplicar type="primary" htmlType="submit">
                Aplicar
              </ButtonAplicar>
            </AplicarDiv>
          </Actions>
        </ViceriFormSpacing>
      </ViceriForm>
    </AjustarQuantidade>
  );
};

export default AjustarQuantidadePage;
