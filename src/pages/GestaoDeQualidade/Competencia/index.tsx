import React, { useState, useEffect } from 'react';

import { Typography, Table } from 'antd';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';

import {
  Competencia,
  Body,
  CadastroDiv,
  Line01,
  CompetenciaDiv,
  AnodeCompetencia,
  SelectAnoCompetencia,
  SelectAnoCompetenciaOption,
  Line02,
  PeriododeCadastroDiv,
  PeriododeCadastros,
  DatePickerPeriodoCadastro,
  SemanasDisponibilizadasDiv,
  SemanasDisponibilizadas,
  DatePickerSemanaDisponibilizadas,
  CadastroDivSpacing,
  ChaveDiv,
  Chave,
  InputRazaoSocial,
  JustificativaDiv,
  Justificativa,
  BodySpacing,
  JustificativaAlteracao,
} from './styles';

const EventosPage = () => {
  function pesquisar() {
    console.log('pesquisar');
  }

  function limpar() {
    console.log('limpar');
  }

  const listAnoCompetencia = [
    {
      id: 1,
      desc: '2020',
    },
    {
      id: 2,
      desc: '2021',
    },
    {
      id: 3,
      desc: '2022',
    },
  ];

  const listTable = [
    {
      id: 1,
      status: '-',
      iniciodocadastro: '01/01/2021',
      finaldocadastro: '28/02/2021',
      semanasdisponiveis: '01 -> 15',
      limitadores: '1040 - João da Silva LTDA (Viva flores)',
      justificativa: 'Correção e Planejamento',
    },
    {
      id: 2,
      status: '-',
      iniciodocadastro: '01/01/2021',
      finaldocadastro: '28/02/2021',
      semanasdisponiveis: '01 -> 15',
      limitadores: '1040 - João da Silva LTDA (Viva flores)',
      justificativa: 'Correção e Planejamento',
    },
    {
      id: 3,
      status: '-',
      iniciodocadastro: '01/01/2021',
      finaldocadastro: '28/02/2021',
      semanasdisponiveis: '01 -> 15',
      limitadores: '1040 - João da Silva LTDA (Viva flores)',
      justificativa: 'Correção e Planejamento',
    },
  ];

  return (
    <BodySpacing>
      <CadastroDiv>
        <CadastroDivSpacing>
          <Line01>
            <CompetenciaDiv>
              <AnodeCompetencia
                label={
                  <Typography.Text ellipsis>
                    Ano de competência:
                  </Typography.Text>
                }
                name="anodecompetencia"
                rules={[
                  {
                    required: true,
                    message: 'Campo obrigatório',
                  },
                ]}
              />
              <SelectAnoCompetencia>
                {listAnoCompetencia.map(option => (
                  <SelectAnoCompetenciaOption key={option.id} value={option.id}>
                    {option.desc}
                  </SelectAnoCompetenciaOption>
                ))}
              </SelectAnoCompetencia>
            </CompetenciaDiv>
          </Line01>
          <Line02>
            <PeriododeCadastroDiv>
              <PeriododeCadastros
                label={
                  <Typography.Text ellipsis>
                    Período de cadastros:
                  </Typography.Text>
                }
                name="periododecadastros"
                rules={[
                  {
                    required: true,
                    message: 'Campo obrigatório',
                  },
                ]}
              />
              <DatePickerPeriodoCadastro format="DD/MM/YYYY" size="middle" />
            </PeriododeCadastroDiv>
            <SemanasDisponibilizadasDiv>
              <SemanasDisponibilizadas
                label={
                  <Typography.Text ellipsis>
                    Semanas disponibilizadas:
                  </Typography.Text>
                }
                name="semanasdisponibilizadas"
                rules={[
                  {
                    required: true,
                    message: 'Campo obrigatório',
                  },
                ]}
              />
              <DatePickerSemanaDisponibilizadas
                format="DD/MM/YYYY"
                size="middle"
              />
            </SemanasDisponibilizadasDiv>
          </Line02>
        </CadastroDivSpacing>
      </CadastroDiv>
      <ChaveDiv>
        <Chave
          label={
            <Typography.Text ellipsis>
              Chave / Razão social / Nome fantasia:
            </Typography.Text>
          }
          name="chave"
          rules={[
            {
              required: true,
              message: 'Campo obrigatório',
            },
          ]}
        />
        <InputRazaoSocial />
      </ChaveDiv>
      <JustificativaDiv>
        <Justificativa
          label={<Typography.Text ellipsis>Justificativa:</Typography.Text>}
          name="justificativa"
        />
        <JustificativaAlteracao />
      </JustificativaDiv>
    </BodySpacing>
  );
};

export default EventosPage;
