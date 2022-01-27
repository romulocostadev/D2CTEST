import { useState, useEffect } from 'react';

import {
  SaveOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import { Typography, Table, Space } from 'antd';

import {
  CadastroEstoque,
  Page,
  Body,
  Card,
  Header,
  Tabs,
  TabPane,
  PageActions,
  Actions,
  ButtonSalvar,
  ButtonHelper,
  Filters,
  ViceriForm,
  Line1,
  ChaveFrame,
  InputLabel,
  InputChave,
  SemanaFrame,
  PickerSemana,
  Line2,
  CategoriaFrame,
  CategoriaSeletec,
  DistribuidoSelectOption,
  CategoriaSeletecOption,
  GrupoSelectOption,
  GrupoFrame,
  GrupoSelect,
  QualidadeFrame,
  DistribuidoSelect,
  ButtonProcurar,
  DataFrame,
  DataLabel,
  Datascomemorativas,
  DataList,
  Selecioneumasemana,
  Body1,
  Collapse,
  Group1,
  TabsDiv,
} from './styles';

const { Column } = Table;

const CadastroEstoquePage = () => {
  function salvar() {
    console.log('bla');
  }

  function helper() {
    console.log('bla');
  }

  function procurar() {
    console.log('bla');
  }

  const list = [
    {
      id: 1,
      Descricao: 'foo',
    },
    {
      id: 2,
      Descricao: 'foo',
    },
  ];

  return (
    <CadastroEstoque>
      <Page>
        <Body>
          <Card>
            <Header>
              <TabsDiv>
                <Tabs defaultActiveKey="produtos">
                  <TabPane tab="Produtos" key="produtos">
                    <Filters>
                      <Group1>
                        <ViceriForm layout="vertical">
                          <Line1>
                            <ChaveFrame>
                              <InputLabel
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
                              >
                                <InputChave />
                              </InputLabel>
                            </ChaveFrame>
                            <SemanaFrame>
                              <InputLabel
                                label={
                                  <Typography.Text ellipsis>
                                    Semana/ano:
                                  </Typography.Text>
                                }
                                name="semana"
                                rules={[
                                  {
                                    required: true,
                                    message: 'Campo obrigatório',
                                  },
                                ]}
                              >
                                <PickerSemana format="DD/MM/YYYY" />
                              </InputLabel>
                            </SemanaFrame>
                          </Line1>
                          <Line2>
                            <CategoriaFrame>
                              <InputLabel
                                label={
                                  <Typography.Text ellipsis>
                                    Categoria:
                                  </Typography.Text>
                                }
                                name="categoria"
                              >
                                <CategoriaSeletec>
                                  {list.map(l => (
                                    <CategoriaSeletecOption
                                      key={l.id}
                                      value={l.Descricao}
                                    >
                                      {l.Descricao}
                                    </CategoriaSeletecOption>
                                  ))}
                                </CategoriaSeletec>
                              </InputLabel>
                            </CategoriaFrame>
                            <GrupoFrame>
                              <InputLabel
                                label={
                                  <Typography.Text ellipsis>
                                    Grupo:
                                  </Typography.Text>
                                }
                                name="grupo"
                              >
                                <GrupoSelect>
                                  {list.map(l => (
                                    <GrupoSelectOption
                                      key={l.id}
                                      value={l.Descricao}
                                    >
                                      {l.Descricao}
                                    </GrupoSelectOption>
                                  ))}
                                </GrupoSelect>
                              </InputLabel>
                            </GrupoFrame>
                            <QualidadeFrame>
                              <InputLabel
                                label={
                                  <Typography.Text ellipsis>
                                    Distribuído:
                                  </Typography.Text>
                                }
                                name="distribuido"
                              >
                                <DistribuidoSelect>
                                  {list.map(l => (
                                    <DistribuidoSelectOption
                                      key={l.id}
                                      value={l.Descricao}
                                    >
                                      {l.Descricao}
                                    </DistribuidoSelectOption>
                                  ))}
                                </DistribuidoSelect>
                              </InputLabel>
                            </QualidadeFrame>
                            <ButtonProcurar
                              icon={<SearchOutlined />}
                              type="primary"
                              onClick={procurar}
                            />
                          </Line2>
                        </ViceriForm>
                      </Group1>
                      <DataFrame>
                        <DataLabel>
                          <Datascomemorativas>
                            Datas comemorativas:
                          </Datascomemorativas>
                        </DataLabel>
                        <DataList>
                          <Selecioneumasemana>
                            Selecione uma semana.
                          </Selecioneumasemana>
                        </DataList>
                      </DataFrame>
                    </Filters>
                    <Body1>
                      <Collapse />
                      <Table bordered dataSource={[]}>
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
                              <a href={`suitability/${record.Id}`}>
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
                    </Body1>
                  </TabPane>
                  <TabPane
                    tab="Distribuição de produtos"
                    key="distribuicaodeproduto"
                  >
                    <Filters>
                      <Group1>
                        <ViceriForm layout="vertical">
                          <Line1>
                            <ChaveFrame>
                              <InputLabel
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
                              >
                                <InputChave />
                              </InputLabel>
                            </ChaveFrame>
                            <SemanaFrame>
                              <InputLabel
                                label={
                                  <Typography.Text ellipsis>
                                    Semana/ano:
                                  </Typography.Text>
                                }
                                name="semana"
                                rules={[
                                  {
                                    required: true,
                                    message: 'Campo obrigatório',
                                  },
                                ]}
                              >
                                <PickerSemana format="DD/MM/YYYY" />
                              </InputLabel>
                            </SemanaFrame>
                          </Line1>
                          <Line2>
                            <CategoriaFrame>
                              <InputLabel
                                label={
                                  <Typography.Text ellipsis>
                                    Categoria:
                                  </Typography.Text>
                                }
                                name="categoria"
                              >
                                <CategoriaSeletec>
                                  {list.map(l => (
                                    <CategoriaSeletecOption
                                      key={l.id}
                                      value={l.Descricao}
                                    >
                                      {l.Descricao}
                                    </CategoriaSeletecOption>
                                  ))}
                                </CategoriaSeletec>
                              </InputLabel>
                            </CategoriaFrame>
                            <GrupoFrame>
                              <InputLabel
                                label={
                                  <Typography.Text ellipsis>
                                    Grupo:
                                  </Typography.Text>
                                }
                                name="grupo"
                              >
                                <GrupoSelect>
                                  {list.map(l => (
                                    <GrupoSelectOption
                                      key={l.id}
                                      value={l.Descricao}
                                    >
                                      {l.Descricao}
                                    </GrupoSelectOption>
                                  ))}
                                </GrupoSelect>
                              </InputLabel>
                            </GrupoFrame>
                            <QualidadeFrame>
                              <InputLabel
                                label={
                                  <Typography.Text ellipsis>
                                    Qualidade:
                                  </Typography.Text>
                                }
                                name="qualidade"
                              >
                                <DistribuidoSelect>
                                  {list.map(l => (
                                    <DistribuidoSelectOption
                                      key={l.id}
                                      value={l.Descricao}
                                    >
                                      {l.Descricao}
                                    </DistribuidoSelectOption>
                                  ))}
                                </DistribuidoSelect>
                              </InputLabel>
                            </QualidadeFrame>
                            <ButtonProcurar
                              icon={<SearchOutlined />}
                              type="primary"
                              onClick={procurar}
                            />
                          </Line2>
                        </ViceriForm>
                      </Group1>
                      <DataFrame>
                        <DataLabel>
                          <Datascomemorativas>
                            Datas comemorativas:
                          </Datascomemorativas>
                        </DataLabel>
                        <DataList>
                          <Selecioneumasemana>
                            Selecione uma semana.
                          </Selecioneumasemana>
                        </DataList>
                      </DataFrame>
                    </Filters>
                    <Body1>
                      <Collapse />
                      <Table bordered dataSource={[]}>
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
                              <a href={`suitability/${record.Id}`}>
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
                    </Body1>
                  </TabPane>
                </Tabs>
              </TabsDiv>
              <PageActions>
                <Actions>
                  <ButtonSalvar
                    icon={<SaveOutlined />}
                    type="primary"
                    onClick={salvar}
                  />
                  <ButtonHelper
                    icon={<QuestionCircleOutlined />}
                    type="default"
                    onClick={helper}
                  />
                </Actions>
              </PageActions>
            </Header>
          </Card>
        </Body>
      </Page>
    </CadastroEstoque>
  );
};

export default CadastroEstoquePage;
