import React, { useState, useEffect, useCallback } from 'react';

import { Typography, Table, Space } from 'antd';
import { SaveOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import {
  AlertaPLP,
  Card,
  ViceriForm,
  CategoriaDiv,
  Categoria,
  SelectCategory,
  SelectCategoryOption,
  PorcentagemAbaixoDiv,
  PercentageLess,
  InputPercentageLess,
  PorcentagemAcimaDiv,
  PercentageMore,
  InputPercentageMore,
  FormActions,
  SaveButton,
  CardSpacing,
  FormDiv,
} from './styles';

const { Column } = Table;

const AlertaPLPPage = () => {
  const categorias = [
    {
      id: 1,
      desc: 'cat1',
    },
    {
      id: 2,
      desc: 'cat2',
    },
  ];

  const listAlertaPreco = [{}];

  const savePLP = useCallback(() => {
    console.log('save PLP');
  }, []);

  return (
    <AlertaPLP>
      <Card>
        <CardSpacing>
          <ViceriForm layout="vertical">
            <FormDiv>
              <CategoriaDiv>
                <Categoria
                  label={<Typography.Text ellipsis>Categoria:</Typography.Text>}
                  name="categoria"
                >
                  <SelectCategory>
                    {categorias.map(option => (
                      <SelectCategoryOption key={option.id} value={option.id}>
                        {option.desc}
                      </SelectCategoryOption>
                    ))}
                  </SelectCategory>
                </Categoria>
              </CategoriaDiv>
              <PorcentagemAbaixoDiv>
                <PercentageLess
                  label={
                    <Typography.Text ellipsis>
                      Porcentagem abaixo da média:
                    </Typography.Text>
                  }
                  name="percentageless"
                >
                  <InputPercentageLess />
                </PercentageLess>
              </PorcentagemAbaixoDiv>
              <PorcentagemAcimaDiv>
                <PercentageMore
                  label={
                    <Typography.Text ellipsis>
                      Porcentagem acima da média:
                    </Typography.Text>
                  }
                  name="percentagemore"
                >
                  <InputPercentageMore />
                </PercentageMore>
              </PorcentagemAcimaDiv>
              <FormActions>
                <SaveButton
                  type="primary"
                  icon={<SaveOutlined />}
                  onClick={savePLP}
                />
              </FormActions>
            </FormDiv>
          </ViceriForm>
          <Table bordered dataSource={listAlertaPreco}>
            <Column
              title="Categoria"
              dataIndex="category"
              key="category"
              width="414px"
              align="left"
              showSorterTooltip={false}
              sorter={(a: any, b: any) => a.category - b.category}
            />
            <Column
              title="Porcentagem abaixo da média:"
              dataIndex="percentageLess"
              key="percentageLess"
              width="320px"
              align="left"
              showSorterTooltip={false}
              sorter={(a: any, b: any) => a.percentageLess - b.percentageLess}
            />
            <Column
              title="Porcentagem acima da média"
              dataIndex="percentageMore"
              key="percentageMore"
              width="320px"
              align="left"
              showSorterTooltip={false}
              sorter={(a: any, b: any) => a.percentageMore - b.percentageMore}
            />
            <Column
              title="Ações"
              key="acoes"
              width="100px"
              align="center"
              render={(text, record: any) => (
                <Space>
                  <a href="/">
                    <EditOutlined
                      style={{ color: '#262626', marginRight: 10 }}
                    />
                  </a>
                  <a href="/">
                    <DeleteOutlined style={{ color: '#262626' }} />
                  </a>
                </Space>
              )}
            />
          </Table>
        </CardSpacing>
      </Card>
    </AlertaPLP>
  );
};

export default AlertaPLPPage;
