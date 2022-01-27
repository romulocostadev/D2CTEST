import { useState, useEffect } from 'react';

import {
  MailOutlined,
  RiseOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import {
  TesteVeiling,
  LeftContainer,
  Menu,
  MenuItem,
  SubMenu,
  Page,
  ViceriForm,
  Content,
  Row1,
  Coluna2,
  CarddeVendas,
  Frame88,
  Frame58,
  Crescimento,
  Porcentagem,
  Button1,
  Frame59,
  Frame60,
  Text1,
  Desdeoultimomes,
  Pedidos,
  PedidosValue,
  Button2,
  ValuePedidos,
  ProdutosmaisVendidos,
  Header,
  PRODUTOSMAISVENDIDOS,
  Action,
  Exportar,
  Dados,
  RowList,
  Coluna01,
  ProdutoLabel,
  Produtodate,
  Coluna02,
  ValorValue,
  ValorLabel,
  Coluna03,
  QuantidadeValue,
  QuantidadeLabel,
  Coluna04,
  TotalValue,
  TotalLabel,
  DividerList,
} from './styles';

const TesteVeilingPage = () => {
  const [current, setCurrent] = useState('home');

  function handleClickMenu(e: any) {
    setCurrent(e.key);
  }

  function submit() {
    // fetchSelection1({ customPath: '/api/EstadosCivis' })({});
    console.log('oi');
  }

  return (
    <TesteVeiling>
      <LeftContainer>
        <Menu onClick={handleClickMenu} selectedKeys={[current]} mode="inline">
          <MenuItem key="home" icon={<MailOutlined />}>
            Home
          </MenuItem>
          <SubMenu key="cadastro" icon={<MailOutlined />} title="Cadastro">
            <MenuItem key="cliente">Cliente</MenuItem>
            <MenuItem key="projetos">Projetos</MenuItem>
          </SubMenu>
        </Menu>
      </LeftContainer>
      <Page>
        <ViceriForm onFinish={submit} layout="vertical">
          <Content>
            <Row1>
              <Coluna2>
                <CarddeVendas>
                  <Frame88>
                    <Frame58>
                      <Pedidos>Pedidos</Pedidos>
                      <PedidosValue>23</PedidosValue>
                    </Frame58>
                    <Button2
                      icon={<ShoppingCartOutlined />}
                      size="large"
                      type="primary"
                    />
                  </Frame88>
                  <Frame59>
                    <Frame60>
                      <ValuePedidos>1,39%</ValuePedidos>
                    </Frame60>
                    <Desdeoultimomes>Desde o último mês</Desdeoultimomes>
                  </Frame59>
                </CarddeVendas>
                <CarddeVendas>
                  <Frame88>
                    <Frame58>
                      <Crescimento>Crescimento</Crescimento>
                      <Porcentagem>+30,56%</Porcentagem>
                    </Frame58>
                    <Button1
                      icon={<RiseOutlined />}
                      size="large"
                      type="primary"
                    />
                  </Frame88>
                  <Frame59>
                    <Frame60>
                      <Text1>5,47%</Text1>
                    </Frame60>
                    <Desdeoultimomes>Desde o último mês</Desdeoultimomes>
                  </Frame59>
                </CarddeVendas>
              </Coluna2>
              <Coluna2>
                <CarddeVendas>
                  <Frame88>
                    <Frame58>
                      <Pedidos>Pedidos</Pedidos>
                      <PedidosValue>23</PedidosValue>
                    </Frame58>
                    <Button2
                      icon={<ShoppingCartOutlined />}
                      size="large"
                      type="primary"
                    />
                  </Frame88>
                  <Frame59>
                    <Frame60>
                      <ValuePedidos>1,39%</ValuePedidos>
                    </Frame60>
                    <Desdeoultimomes>Desde o último mês</Desdeoultimomes>
                  </Frame59>
                </CarddeVendas>
                <CarddeVendas>
                  <Frame88>
                    <Frame58>
                      <Crescimento>Crescimento</Crescimento>
                      <Porcentagem>+30,56%</Porcentagem>
                    </Frame58>
                    <Button1
                      icon={<RiseOutlined />}
                      size="large"
                      type="primary"
                      // color="#FFEAC2"
                    />
                  </Frame88>
                  <Frame59>
                    <Frame60>
                      <Text1>5,47%</Text1>
                    </Frame60>
                    <Desdeoultimomes>Desde o último mês</Desdeoultimomes>
                  </Frame59>
                </CarddeVendas>
              </Coluna2>
              <ProdutosmaisVendidos>
                <Header>
                  <PRODUTOSMAISVENDIDOS>
                    PRODUTOS MAIS VENDIDOS
                  </PRODUTOSMAISVENDIDOS>
                  <Action>
                    <Exportar>Exportar</Exportar>
                  </Action>
                </Header>
                <Dados>
                  <RowList>
                    <Coluna01>
                      <ProdutoLabel>Amaryllis</ProdutoLabel>
                      <Produtodate>22 de Junho de 2021</Produtodate>
                    </Coluna01>
                    <Coluna02>
                      <ValorValue>R$4,99</ValorValue>
                      <ValorLabel>Valor</ValorLabel>
                    </Coluna02>
                    <Coluna03>
                      <QuantidadeValue>12</QuantidadeValue>
                      <QuantidadeLabel>Quantidade</QuantidadeLabel>
                    </Coluna03>
                    <Coluna04>
                      <TotalValue>R$59,88</TotalValue>
                      <TotalLabel>Total</TotalLabel>
                    </Coluna04>
                  </RowList>
                  <DividerList />
                  <RowList>
                    <Coluna01>
                      <ProdutoLabel>Amaryllis</ProdutoLabel>
                      <Produtodate>22 de Junho de 2021</Produtodate>
                    </Coluna01>
                    <Coluna02>
                      <ValorValue>R$4,99</ValorValue>
                      <ValorLabel>Valor</ValorLabel>
                    </Coluna02>
                    <Coluna03>
                      <QuantidadeValue>12</QuantidadeValue>
                      <QuantidadeLabel>Quantidade</QuantidadeLabel>
                    </Coluna03>
                    <Coluna04>
                      <TotalValue>R$59,88</TotalValue>
                      <TotalLabel>Total</TotalLabel>
                    </Coluna04>
                  </RowList>
                  <DividerList />
                  <RowList>
                    <Coluna01>
                      <ProdutoLabel>Amaryllis</ProdutoLabel>
                      <Produtodate>22 de Junho de 2021</Produtodate>
                    </Coluna01>
                    <Coluna02>
                      <ValorValue>R$4,99</ValorValue>
                      <ValorLabel>Valor</ValorLabel>
                    </Coluna02>
                    <Coluna03>
                      <QuantidadeValue>12</QuantidadeValue>
                      <QuantidadeLabel>Quantidade</QuantidadeLabel>
                    </Coluna03>
                    <Coluna04>
                      <TotalValue>R$59,88</TotalValue>
                      <TotalLabel>Total</TotalLabel>
                    </Coluna04>
                  </RowList>
                  <DividerList />
                  <RowList>
                    <Coluna01>
                      <ProdutoLabel>Amaryllis</ProdutoLabel>
                      <Produtodate>22 de Junho de 2021</Produtodate>
                    </Coluna01>
                    <Coluna02>
                      <ValorValue>R$4,99</ValorValue>
                      <ValorLabel>Valor</ValorLabel>
                    </Coluna02>
                    <Coluna03>
                      <QuantidadeValue>12</QuantidadeValue>
                      <QuantidadeLabel>Quantidade</QuantidadeLabel>
                    </Coluna03>
                    <Coluna04>
                      <TotalValue>R$59,88</TotalValue>
                      <TotalLabel>Total</TotalLabel>
                    </Coluna04>
                  </RowList>
                  <DividerList />
                </Dados>
              </ProdutosmaisVendidos>
            </Row1>
          </Content>
        </ViceriForm>
      </Page>
    </TesteVeiling>
  );
};

export default TesteVeilingPage;
