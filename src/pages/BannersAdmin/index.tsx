import React, { useState, useEffect } from 'react';

import { Typography, Table, Space } from 'antd';
import {
  SearchOutlined,
  ClearOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import {
  BannersAdmin,
  Card,
  FormWrapper,
  DescricaoDiv,
  Descricao,
  Description,
  TipoDiv,
  Tipodebanner,
  BannerType,
  BannerTypeOption,
  StatusDiv,
  StatusForm,
  Status,
  StatusOption,
  ActionsDiv,
  SearchButton,
  ButtonClear,
  TableBody,
  CardSpacing,
  ViceriForm,
} from './styles';

const { Column } = Table;

const BannersAdminPage = () => {
  function handleSearchButton() {
    console.log('handleSearchButton');
  }

  function handleClearButton() {
    console.log('handleClearButton');
  }

  const listTypeBanner = [{ id: 1, desc: '1' }];
  const listStatus = [{ id: 1, desc: '1' }];
  const listBanners = [{}];

  return (
    <BannersAdmin>
      <Card>
        <CardSpacing>
          <ViceriForm layout="vertical">
            <FormWrapper>
              <DescricaoDiv>
                <Descricao
                  label={<Typography.Text ellipsis>Descrição:</Typography.Text>}
                  name="descricao"
                  rules={[{ required: true, message: 'Campo obrigatório' }]}
                >
                  <Description />
                </Descricao>
              </DescricaoDiv>
              <TipoDiv>
                <Tipodebanner
                  label={
                    <Typography.Text ellipsis>Tipo de banner:</Typography.Text>
                  }
                  name="tipodebanner"
                  rules={[{ required: true, message: 'Campo obrigatório' }]}
                >
                  <BannerType>
                    {listTypeBanner.map(option => (
                      <BannerTypeOption key={option.id} value={option.id}>
                        {option.desc}
                      </BannerTypeOption>
                    ))}
                  </BannerType>
                </Tipodebanner>
              </TipoDiv>
              <StatusDiv>
                <StatusForm
                  label={<Typography.Text ellipsis>Status:</Typography.Text>}
                  name="status"
                  rules={[{ required: true, message: 'Campo obrigatório' }]}
                >
                  <Status>
                    {listStatus.map(option => (
                      <StatusOption key={option.id} value={option.id}>
                        {option.desc}
                      </StatusOption>
                    ))}
                  </Status>
                </StatusForm>
              </StatusDiv>
              <ActionsDiv>
                <SearchButton
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={handleSearchButton}
                />
                <ButtonClear
                  type="default"
                  icon={<ClearOutlined />}
                  onClick={handleClearButton}
                />
              </ActionsDiv>
            </FormWrapper>
          </ViceriForm>
          <TableBody>
            <Table bordered dataSource={listBanners}>
              <Column
                title="Status"
                dataIndex="status"
                key="status"
                width="65px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.status - b.status}
              />
              <Column
                title="Descrição"
                dataIndex="description"
                key="description"
                width="507px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.description - b.description}
              />
              <Column
                title="Tipo de Banner"
                dataIndex="bannerType"
                key="bannerType"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.bannerType - b.bannerType}
              />
              <Column
                title="Data de Upload"
                dataIndex="uploadDate"
                key="uploadDate"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.uploadDate - b.uploadDate}
              />
              <Column
                title="Usuário"
                dataIndex="user"
                key="user"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.user - b.user}
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
          </TableBody>
        </CardSpacing>
      </Card>
    </BannersAdmin>
  );
};

export default BannersAdminPage;
