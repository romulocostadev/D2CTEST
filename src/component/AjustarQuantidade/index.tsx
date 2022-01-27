import { useState, useEffect } from 'react';

import { Typography } from 'antd';

import {
  AjustarQuantidade,
  Modal,
  Header,
  Ajustarquantidade,
  Body,
  MainInfo,
  GrupoDiv,
  Grupo,
  Retornaonomedogrupo,
  Estoque,
  Estoqueatual,
  Retornaovaloratualdeestoquedogrupo,
  Produto,
  InputLabel,
  InputProduto,
  Actions,
  CancelarDiv,
  ButtonCancelar,
  AplicarDiv,
  ButtonAplicar,
  Teste,
} from './styles';

const AjustarQuantidadePage = () => {
  function cancelar() {
    console.log('cancelar');
  }

  function aplicar() {
    console.log('aplicar');
  }

  return (
    <AjustarQuantidade>
      <Modal>
        <Teste>
          <Header>
            <Ajustarquantidade>Ajustar quantidade</Ajustarquantidade>
          </Header>
          <Body>
            <MainInfo>
              <GrupoDiv>
                <Grupo>Grupo:</Grupo>
                <Retornaonomedogrupo>
                  01639.011 - Kalanchoe P11
                </Retornaonomedogrupo>
              </GrupoDiv>
              <Estoque>
                <Estoqueatual>Estoque atual:</Estoqueatual>
                <Retornaovaloratualdeestoquedogrupo>
                  20.000
                </Retornaovaloratualdeestoquedogrupo>
              </Estoque>
            </MainInfo>
            <Produto>
              <InputLabel
                label={<Typography.Text ellipsis>Produto:</Typography.Text>}
                name="inputlabel"
              >
                <InputProduto />
              </InputLabel>
            </Produto>
          </Body>
          <Actions>
            <CancelarDiv>
              <ButtonCancelar ghost type="primary" onClick={cancelar}>
                Cancelar
              </ButtonCancelar>
            </CancelarDiv>
            <AplicarDiv>
              <ButtonAplicar type="primary" onClick={aplicar}>
                Aplicar
              </ButtonAplicar>
            </AplicarDiv>
          </Actions>
        </Teste>
      </Modal>
    </AjustarQuantidade>
  );
};

export default AjustarQuantidadePage;
