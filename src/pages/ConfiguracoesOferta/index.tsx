import React, { useState, useEffect } from 'react';

import { Typography } from 'antd';

import {
  Configuracoesdeoferta,
  Card,
  ChaveDiv,
  InputLabel,
  InputEnterpriseName,
  PadraoDeContagem,
  PadraodeContagemVolDiv,
  PadraoContagem,
  InputQntVol,
  HistoricoPorcentagem,
  PercentageHistory,
  Composicao,
  ComposicaoDiv,
  ComposicaoFormItem,
  InputComposicao,
  Line01Action,
  CompositionHistory,
  QuantidadeMinima,
  CardSpacing,
} from './styles';

const ConfiguracoesdeofertaPage = () => {
  function verHistorico() {
    console.log(' verHistorico');
  }

  return (
    <Configuracoesdeoferta>
      <Card>
        <CardSpacing>
          <ChaveDiv>
            <InputLabel
              label={
                <Typography.Text ellipsis>
                  Chave / Razão social / Nome fantasia
                </Typography.Text>
              }
              name="inputlabel"
            >
              <InputEnterpriseName />
            </InputLabel>
          </ChaveDiv>
          <PadraoDeContagem>
            <PadraodeContagemVolDiv>
              <PadraoContagem
                label={
                  <Typography.Text ellipsis>
                    Padrão de contagem VOL
                  </Typography.Text>
                }
                name="padraocontagem"
              >
                <InputQntVol />
              </PadraoContagem>
            </PadraodeContagemVolDiv>
            <HistoricoPorcentagem>
              <PercentageHistory type="link" onClick={verHistorico}>
                Ver histórico
              </PercentageHistory>
            </HistoricoPorcentagem>
          </PadraoDeContagem>
          <Composicao>
            <ComposicaoDiv>
              <ComposicaoFormItem
                label={<Typography.Text ellipsis>Composição </Typography.Text>}
                name="composicao"
              >
                <InputComposicao />
              </ComposicaoFormItem>
            </ComposicaoDiv>
            <Line01Action>
              <CompositionHistory type="link">Ver histórico</CompositionHistory>
            </Line01Action>
          </Composicao>
          <QuantidadeMinima />
        </CardSpacing>
      </Card>
    </Configuracoesdeoferta>
  );
};

export default ConfiguracoesdeofertaPage;
