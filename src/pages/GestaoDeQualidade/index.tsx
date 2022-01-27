import React, { useState, useEffect } from 'react';

import { Typography, Table } from 'antd';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';

import {
  EventosLayout,
  Card,
  Line01,
  CompetenciaDiv,
  Competencia,
  SelectAnoCompetencia,
  SelectAnoCompetenciaOption,
  StatusDiv,
  Status,
  SelectStatus,
  SelectStatusOption,
  FilterActions,
  PesquisarDiv,
  ButtonPesquisar,
  LimparDiv,
  ButtonLimpar,
  CardSpacing,
  Tabs,
  TabPane,
  Collapse,
  CollapsePanel,
} from './styles';

import Eventos from './Eventos';
import CompetenciaTab from './Competencia';

const { Column } = Table;

const EventosPage = () => {
  function pesquisar() {
    console.log('pesquisar');
  }

  return (
    <EventosLayout>
      <Card>
        <Tabs defaultActiveKey="competencia" size="small">
          <TabPane tab="Competência" key="competencia">
            <CompetenciaTab />
          </TabPane>
          <TabPane tab="Eventos" key="eventos">
            <Eventos />
          </TabPane>
        </Tabs>
      </Card>
    </EventosLayout>
  );
};

export default EventosPage;
