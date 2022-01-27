import React, { useState, useEffect } from 'react';

import { ExclamationCircleOutlined } from '@ant-design/icons';

import {
  ModalCompositionCancel,
  TextWrapper,
  IconWrapper,
  ModalTitle,
  ModalTitleText,
  ModalBody,
  ModalBodyText,
  ModalActions,
  ButtonClose,
  ButtonCancelComposition,
  TextWrapperSpacing,
} from './styles';

const ModalCompositionCancelPage = () => {
  function handleClose() {
    console.log('handleClose');
  }

  function handleButtonComposition() {
    console.log('handleButtonComposition');
  }

  return (
    <ModalCompositionCancel>
      <IconWrapper>
        <ExclamationCircleOutlined
          style={{ fontSize: '21px', color: '#f88f1f' }}
        />
      </IconWrapper>
      <TextWrapper>
        <TextWrapperSpacing>
          <ModalTitle>
            <ModalTitleText>Cancelar composição</ModalTitleText>
          </ModalTitle>
          <ModalBody>
            <ModalBodyText>
              Tem certeza que deseja cancelar a composição? Todos os itens
              adicionados serão removidos.
            </ModalBodyText>
          </ModalBody>
          <ModalActions>
            <ButtonClose type="default" onClick={handleClose}>
              Fechar
            </ButtonClose>
            <ButtonCancelComposition
              type="primary"
              onClick={handleButtonComposition}
            >
              Cancelar composição
            </ButtonCancelComposition>
          </ModalActions>
        </TextWrapperSpacing>
      </TextWrapper>
    </ModalCompositionCancel>
  );
};

export default ModalCompositionCancelPage;
