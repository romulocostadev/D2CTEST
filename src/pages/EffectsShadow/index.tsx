import React, { useState, useEffect } from 'react';

import {
  EffectsShadow,
  ShadowWrapper,
  InnerShadow,
  DropShadow,
  LayerBlur,
} from './styles';

const EffectsShadowPage = () => {
  return (
    <EffectsShadow>
      <ShadowWrapper>
        <InnerShadow />
        <DropShadow />
        <LayerBlur />
      </ShadowWrapper>
    </EffectsShadow>
  );
};

export default EffectsShadowPage;
