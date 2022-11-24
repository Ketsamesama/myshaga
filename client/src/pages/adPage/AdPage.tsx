import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MainWrapper from 'shared/mainWrapper';

import { fetchAd } from 'entities/ad/api';
import axios from 'axios';
import Ad from 'widgets/ad';
import DiscussionAd from 'widgets/discussionAd';

import style from './AdPage.module.scss';

const AdPage = () => {
  return (
    <MainWrapper>
      <div className={style.root}>
        <Ad />
        <DiscussionAd />
      </div>
    </MainWrapper>
  );
};

export default AdPage;
