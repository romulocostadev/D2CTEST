import { useState, useEffect } from 'react';

import {
  QuestionCircleOutlined,
  PaperClipOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  StarOutlined,
  SaveOutlined,
  LeftOutlined,
} from '@ant-design/icons';

import { Collapse, Divider, Table, Space } from 'antd';

import { useCroods } from 'croods';
import {
  TesteVeiling,
  Page,
  ViceriForm,
  Content,
  Section01,
  RazaoSocial,
  SelectInput01,
  SelectOption,
  ButtonFiscal,
  Section02,
  Row01,
  Codigo,
  InputCodigo,
  Nome,
  InputNome,
  Arrendado,
  SelectArrendado,
  Validadedocontrato,
  ValidadeContrato,
  Row02,
  CEP,
  InputCep,
  Endereco,
  InputEndereco,
  Numero,
  InputNumero,
  Bairro,
  InputBairro,
  Complemento,
  InputComplemento,
  InputLabel,
  InputRazaoSocial,
  SelectEstado,
  SelectCidade,
  InputCoodenada1,
  InputCoodenada2,
  ButtonAnexar,
  Section03,
  Row03,
  InputBasic,
  AddButton,
  Section04,
  Menu,
  MenuItem,
  SubMenu,
  Tabs,
  TabPane,
  MasterTabs,
  WrapperPage,
  MenuText,
  PageActions,
  Actions,
  BackButton,
  SaveButton,
  HelpButton,
} from './styles';

const { Column } = Table;

const { Panel } = Collapse;

const TesteVeilingPage = () => {
  const [current, setCurrent] = useState('dashboard');

  const [
    { saveError: saveErrorTiposContratacao, list: listTiposContratacao },
    {
      fetch: fetchTiposContratacao,
      save: saveTiposContratacao,
      destroy: destroyTiposContratacao,
      setInfo: setInfoTiposContratacao,
      setList: setListTiposContratacao,
    },
  ] = useCroods({ name: 'TiposContratacao' });

  useEffect(() => {
    fetchTiposContratacao({ customPath: '/api/TiposContratacao' })();
    // setListTiposContratacao(data);
  }, []);

  function handleClickMenu(e: any) {
    setCurrent(e.key);
  }

  function submit(values: any) {
    // fetchSelection1({ customPath: '/api/EstadosCivis' })({})
    console.log(values);
  }

  function Button() {
    console.log('oi');
  }

  const listSelect1Option = [{ id: 1, desc: 'desc1' }];
  const list = [{ id: 1, desc: 'list1' }];
  const listSelectEstadoOptions = [{ id: 1, desc: 'list1' }];
  const listSelectCidadeOptions = [{ id: 1, desc: 'list1' }];
  const listSelect2Option = [{ id: 1, desc: 'list1' }];
  const listArmazenamento = [
    {
      id: 1,
      nomeLocal: 'Estufa',
      area: '10.000m2',
      tipo: 'Estufa',
      nomeSecao: 'Tulipas',
      areaSecao: '10.000m2',
    },
  ];

  return (
    <TesteVeiling>
      <Menu onClick={handleClickMenu} selectedKeys={[current]} mode="inline">
        <MenuItem key="dashboard" icon={<StarOutlined />}>
          <MenuText>Dashboard</MenuText>
        </MenuItem>
        <SubMenu key="cadastros" icon={<StarOutlined />} title="Cadastros">
          <MenuItem key="cadastro-de-propriedade">
            Cadastro de Propriedade
          </MenuItem>
          <MenuItem key="projetos">Projetos</MenuItem>
        </SubMenu>
      </Menu>
      <WrapperPage>
        <MasterTabs>
          <Tabs defaultActiveKey="vis-o-geral" size="small">
            <TabPane
              tab="Cadastro de propriedade"
              key="cadastro-de-propriedade"
            >
              <Page>
                <Content>
                  <Tabs defaultActiveKey="vis-o-geral" size="small">
                    <TabPane tab="Visão geral" key="vis-o-geral">
                      <ViceriForm onFinish={submit} layout="vertical">
                        <Collapse
                          defaultActiveKey={['5', '1', '2', '3']}
                          ghost
                          collapsible="header"
                        >
                          {/* <Panel header="Cadastro de propriedade" key="1"> */}
                          <PageActions>
                            <Actions>
                              <BackButton
                                icon={<LeftOutlined />}
                                ghost
                                type="primary"
                              />
                              <SaveButton
                                icon={<SaveOutlined />}
                                type="primary"
                                htmlType="submit"
                              />
                              <HelpButton
                                icon={<QuestionCircleOutlined />}
                                ghost
                                type="primary"
                              />
                            </Actions>
                          </PageActions>
                          <Panel header="Dados do produtor" key="5">
                            <Section01>
                              <Row01>
                                <RazaoSocial
                                  label="Chave / Razão social / Nome fantasia:"
                                  name="razaosocial"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Campo obrigatório',
                                    },
                                  ]}
                                >
                                  <InputRazaoSocial />
                                </RazaoSocial>
                                <ButtonFiscal
                                  icon={<QuestionCircleOutlined />}
                                  ghost
                                  type="primary"
                                  onClick={Button}
                                />
                              </Row01>
                            </Section01>
                          </Panel>

                          <Panel header="Cadastro de propriedade" key="1">
                            <Section02>
                              <Row01>
                                <Codigo
                                  label="Código:"
                                  name="codigo"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Campo obrigatório',
                                    },
                                  ]}
                                >
                                  <InputCodigo />
                                </Codigo>
                                <Nome
                                  label="Nome:"
                                  name="nome"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Campo obrigatório',
                                    },
                                  ]}
                                >
                                  <InputNome />
                                </Nome>
                                <Arrendado
                                  label="Arrendado?"
                                  name="arrendado"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Campo obrigatório',
                                    },
                                  ]}
                                >
                                  <SelectArrendado>
                                    {list.map(l => (
                                      <SelectOption key={l.id} value={l.id}>
                                        {l.id}
                                      </SelectOption>
                                    ))}
                                  </SelectArrendado>
                                </Arrendado>
                                <Validadedocontrato
                                  label="Validade do contrato:"
                                  name="validadedocontrato"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Campo obrigatório',
                                    },
                                  ]}
                                >
                                  <ValidadeContrato format="DD/MM/YYYY" />
                                </Validadedocontrato>
                              </Row01>
                              <Row02>
                                <CEP label="CEP:" name="cep">
                                  <InputCep />
                                </CEP>
                                <Endereco label="Endereço:" name="endereco">
                                  <InputEndereco />
                                </Endereco>
                                <Numero label="Número:" name="numero">
                                  <InputNumero />
                                </Numero>
                                <Bairro label="Bairro:" name="bairro">
                                  <InputBairro />
                                </Bairro>
                                <Complemento
                                  label="Complemento:"
                                  name="complemento"
                                >
                                  <InputComplemento />
                                </Complemento>
                              </Row02>
                              <Row03>
                                <InputLabel label="Estado:" name="inputlabel">
                                  <SelectEstado>
                                    {listSelectEstadoOptions.map(l => (
                                      <SelectOption key={l.id} value={l.id}>
                                        {l.desc}
                                      </SelectOption>
                                    ))}
                                  </SelectEstado>
                                </InputLabel>
                                <InputLabel label="Cidade:" name="inputlabel">
                                  <SelectCidade>
                                    {listSelectCidadeOptions.map(l => (
                                      <SelectOption key={l.id} value={l.id}>
                                        {l.desc}
                                      </SelectOption>
                                    ))}
                                  </SelectCidade>
                                </InputLabel>
                                <InputLabel
                                  label="Coordenadas:"
                                  name="inputlabel"
                                >
                                  <InputCoodenada1 />
                                </InputLabel>

                                <InputCoodenada2 />

                                <ButtonAnexar
                                  icon={<PaperClipOutlined />}
                                  type="default"
                                />
                              </Row03>
                            </Section02>
                          </Panel>
                          <Panel
                            header="Cadastro de locais de produção/amazenagem"
                            key="2"
                          >
                            <Section03>
                              <Row03>
                                <InputLabel label="Tipo:" name="inputlabel">
                                  <SelectInput01>
                                    {listSelect2Option.map(l => (
                                      <SelectOption key={l.id} value={l.id}>
                                        {l.desc}
                                      </SelectOption>
                                    ))}
                                  </SelectInput01>
                                </InputLabel>
                                <InputLabel label="Nome:" name="inputlabel">
                                  <InputBasic />
                                </InputLabel>
                                <AddButton
                                  icon={<PlusOutlined />}
                                  ghost
                                  type="primary"
                                />
                              </Row03>
                            </Section03>
                          </Panel>
                          <Panel
                            header="Locais de produção/armazenagem"
                            key="3"
                          >
                            <Section04>
                              <Table bordered dataSource={listArmazenamento}>
                                <Column
                                  title="Nome Local"
                                  dataIndex="nomeLocal"
                                  key="nomeLocal"
                                  align="left"
                                  showSorterTooltip={false}
                                  sorter={(a: any, b: any) =>
                                    a.nomeLocal - b.nomeLocal
                                  }
                                />
                                <Column
                                  title="Área"
                                  dataIndex="area"
                                  key="area"
                                  align="left"
                                  showSorterTooltip={false}
                                  sorter={(a: any, b: any) => a.area - b.area}
                                />
                                <Column
                                  title="Tipo"
                                  dataIndex="tipo"
                                  key="tipo"
                                  align="left"
                                  showSorterTooltip={false}
                                  sorter={(a: any, b: any) => a.tipo - b.tipo}
                                />
                                <Column
                                  title="Área seção"
                                  dataIndex="areaSecao"
                                  key="areaSecao"
                                  align="left"
                                  showSorterTooltip={false}
                                  sorter={(a: any, b: any) =>
                                    a.areaSecao - b.areaSecao
                                  }
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
                                          style={{
                                            color: '#262626',
                                            marginRight: 10,
                                          }}
                                        />
                                      </a>
                                      <a href="/">
                                        <DeleteOutlined
                                          style={{ color: '#262626' }}
                                        />
                                      </a>
                                    </Space>
                                  )}
                                />
                              </Table>
                            </Section04>
                          </Panel>
                        </Collapse>
                      </ViceriForm>
                    </TabPane>
                    <TabPane
                      tab="Planejamento de produção"
                      key="planejamento-de-produ-o"
                    >
                      Planejamento de produção
                    </TabPane>
                    <TabPane tab="Anexos" key="anexos">
                      Anexos
                    </TabPane>
                    <TabPane tab="Laudos" key="laudos">
                      Laudos
                    </TabPane>
                  </Tabs>
                </Content>
              </Page>
            </TabPane>
          </Tabs>
        </MasterTabs>
      </WrapperPage>
    </TesteVeiling>
  );
};

export default TesteVeilingPage;
