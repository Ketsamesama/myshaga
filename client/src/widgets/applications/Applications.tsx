import React, { useState, useEffect } from 'react';

import LiWrapper from 'shared/liWrapper';
import ApplicationsVoting from 'features/applicationsVoting';

import type { IApps } from './Applications.type';

import { fetchApplication } from 'widgets/applications/api';
import style from './Applications.module.scss';

const Applications = () => {
  const [apps, setApps] = useState<IApps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(1);

  const scrollHandler = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    if (
      scrollHeight - (scrollTop + window.innerHeight) < 100 &&
      apps.length < totalCount
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    fetchApplication(currentPage).then((response) => {
      setApps(apps.concat(response.applications));
      setTotalCount(response.total);
    });
  }, [currentPage]);

  return (
    <div className={style.root}>
      <ul>
        {Array.isArray(apps)
          ? apps.map((item) => {
              return (
                <li key={item.id}>
                  <LiWrapper>
                    <div className={style.prewText}>
                      <p className={style.title}>{item.title}</p>
                      <p className={style.text}>{item.text}</p>
                    </div>

                    <ApplicationsVoting app={item} />
                  </LiWrapper>
                </li>
              );
            })
          : ''}
      </ul>
    </div>
  );
};

export default Applications;
