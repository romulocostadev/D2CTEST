import React, { useState, useEffect } from 'react';

import {
  ResizingFixedeAutoLayoutGap,
  ResizingFixedWrapper,
  ROW01,
  ROW02,
  ROW03,
  ROW04,
} from './styles';

const ResizingFixedeAutoLayoutGapPage = () => {
  return (
    <ResizingFixedeAutoLayoutGap>
      <ResizingFixedWrapper>
        <ROW01 />
        <ROW02 />
        <ROW03 />
        <ROW04 />
      </ResizingFixedWrapper>
    </ResizingFixedeAutoLayoutGap>
  );
};

export default ResizingFixedeAutoLayoutGapPage;
