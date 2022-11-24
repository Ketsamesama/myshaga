import React, { useEffect, useState } from 'react';

import MainWrapper from 'shared/mainWrapper';
import AdsNav from 'widgets/adsNav';
import Ads from 'widgets/ads';

const AdsPage = () => {
  return (
    <MainWrapper>
      <AdsNav />
      <Ads />
    </MainWrapper>
  );
};

export default AdsPage;
