import React, { useState, useEffect } from 'react';

import { Typography, Upload, message } from 'antd';

import { InboxOutlined } from '@ant-design/icons';

import {
  BannersUpload,
  Card,
  ViceriForm,
  FormWrapper,
  DescricaoDiv,
  Descricao,
  Description,
  TipoDiv,
  Tipodebanner,
  TypeBanner,
  TypeBannerOption,
  DragDropBody,
  CardSpacing,
} from './styles';

const { Dragger } = Upload;

const BannersUploadPage = () => {
  const listBannerType = [{ id: 1, desc: '1' }];

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ info }: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop({ e }: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <BannersUpload>
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
                  <TypeBanner>
                    {listBannerType.map(option => (
                      <TypeBannerOption key={option.id} value={option.id}>
                        {option.desc}
                      </TypeBannerOption>
                    ))}
                  </TypeBanner>
                </Tipodebanner>
              </TipoDiv>
            </FormWrapper>
          </ViceriForm>
          <DragDropBody>
            <Dragger style={{ width: '100%' }} {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Clique aqui ou arraste um arquivo para fazer o upload
              </p>
              <p className="ant-upload-hint">
                Permitido o upload de apenas um arquivo. Peso máximo de 5MB.{' '}
                {'\n'}
                Dimensões do Banner Primário: 1440x395px. Dimensões do Banner
                Secundário: 1440x200px.
              </p>
            </Dragger>
            ,
          </DragDropBody>
        </CardSpacing>
      </Card>
    </BannersUpload>
  );
};

export default BannersUploadPage;
