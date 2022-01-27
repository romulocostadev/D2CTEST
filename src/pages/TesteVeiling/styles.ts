import styled from 'styled-components';

import { Form, Menu as MenuAntd, Button } from 'antd';

const { SubMenu: SubMenuAntd } = MenuAntd;

export const TesteVeiling = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  height: auto;
  width: 266px;
`;

export const Menu = styled(MenuAntd)`
  background-color: #ff8500;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-grow: 1;
  width: auto;
  height: 100%;
  li.ant-menu-item::after {
    border-right: 3px solid #ff8500;
  }
  li.ant-menu-item-selected {
    color: #ff8500;
    background-color: #ffffff !important;
  }
  li.ant-menu-item-active {
    color: #ff8500;
    background-color: #ffffff;
  }
  li.ant-menu-submenu {
    div {
      i {
        color: #ffffff;
      }
    }
  }
  li.ant-menu-submenu:hover {
    div {
      i {
        color: #ff8500 !important;
      }
    }
  }
  li.ant-menu-submenu-active {
    background-color: #ffffff;
    div {
      color: #ff8500;
      i {
        color: #ff8500;
      }
    }
  }
`;
export const MenuItem = styled(MenuAntd.Item)`
  color: #ffffff;
`;
export const SubMenu = styled(SubMenuAntd)`
  color: #ffffff;
  ul.ant-menu-sub {
    background-color: #ff8500;
  }
`;
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-grow: 1;
  height: auto;
  width: 100%;
  background-color: #fcfcff;
`;

export const ViceriForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-grow: 1;
  width: auto;
  height: 100%;
  padding: 24px 24px 24px 24px;
  background-color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 16px;
  align-self: stretch;
  width: auto;
  background-color: #ffffff;
  /* border: 1px solid #dadada; */
  border-radius: 8px;
`;

export const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-self: stretch;
  width: auto;
  /* height: 125px; */
  padding-left: 24px;
  padding-right: 24px;
`;

export const Coluna2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: auto;
  width: 208px;
`;

export const CarddeVendas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  width: auto;
  height: 125px;
  padding: 20px 20px 20px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(112, 144, 176, 0.25);
`;

export const Frame88 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  flex-grow: 1;
  width: auto;
  height: 100%;
`;

export const Frame58 = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 16px; */
  align-self: stretch;
  flex-grow: 1;
  height: auto;
  width: 100%;
`;

export const Crescimento = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #8d8d8d;
  text-align: left;
`;

export const Porcentagem = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #5a5a5a;
  text-align: left;
  margin: 16px 0px !important;
`;

export const Button1 = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Frame59 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  align-self: stretch;

  width: auto;
  height: 12px;
`;

export const Frame60 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  height: auto;
  width: auto;
`;

export const Text1 = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  color: #53c51b;
  text-align: left;
`;

// export const Desdeoultimomes = styled.h1`
//   font-family: 'Roboto';
//   font-weight: normal;
//   font-size: 10px;
//   line-height: 10px;
//   color: #8d8d8d;
//   text-align: left;
// `;

export const DividerList = styled.div`
  background: #d9d9d9;
  height: 1px;
`;

export const Pedidos = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #8d8d8d;
  text-align: left;
`;

export const PedidosValue = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #5a5a5a;
  text-align: left;
  margin: 16px 0px !important;
`;

export const Button2 = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const ValuePedidos = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  color: #fb551d;
  text-align: left;
`;

export const Desdeoultimomes = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: left;
`;

export const ProdutosmaisVendidos = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  gap: 8px;
  width: 672px;
  /* height: 145px; */
  padding: 24px 24px 24px 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(112, 144, 176, 0.25);
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  width: 100%;
  height: 44px;
  padding-bottom: 24px;
`;

export const PRODUTOSMAISVENDIDOS = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #36393a;
  text-align: left;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  height: auto;
  width: auto;
`;

export const Exportar = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #f88f1f;
  text-align: left;
`;

export const Dados = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  width: auto;
`;

export const RowList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-self: stretch;
  width: auto;
  height: 28px;
`;

export const Coluna01 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  height: auto;
  width: 288px;
`;

export const ProdutoLabel = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #5a5a5a;
  text-align: left;
`;

export const Produtodate = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: left;
`;

export const Coluna02 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: auto;
  width: 108px;
`;

export const ValorValue = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #5a5a5a;
  text-align: left;
`;

export const ValorLabel = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: left;
`;

export const Coluna03 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: auto;
  width: 108px;
`;

export const QuantidadeValue = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #5a5a5a;
  text-align: left;
`;

export const QuantidadeLabel = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: left;
`;

export const Coluna04 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: auto;
  width: 108px;
`;

export const TotalValue = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #5a5a5a;
  text-align: left;
`;

export const TotalLabel = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: left;
`;
