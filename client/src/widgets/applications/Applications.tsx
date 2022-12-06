import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LiWrapper from 'shared/liWrapper';
import ApplicationsVoting from 'features/applicationsVoting';

import { STATUS } from './Applications.type';
import { API_URL } from 'shared/api';
import type { IStateApp, IApps } from './Applications.type';

import { useGetApplicationsQuery } from 'widgets/applications/models';

import style from './Applications.module.scss';

const Applications = () => {
  const [apps, setApps] = useState<IApps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const { isLoading, isError, data } = useGetApplicationsQuery(currentPage, {
    skip: fetching === false,
    refetchOnFocus: true,
  });

  useEffect(() => {
    if (data) {
      setApps([...apps, ...data]);
    }
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(data);
  });
  // useEffect(() => {
  //   const url = `${API_URL}/applications?page=${currentPage}`;
  //   if (fetching) {
  //     axios
  //       .get<IApps[]>(url)
  //       .then((response) => {
  //         setApps([...apps, ...response.data]);
  //         setcurrentPage((prewState) => prewState + 1);
  //       })
  //       .finally(() => setFetching(false))
  //       .catch((e) => setApps(STATUS.error));
  //   }
  // }, [fetching]);

  const scrollHandler = (e: React.WheelEvent) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;

    if (scrollHeight - (scrollTop + window.innerHeight) < 100) {
      setCurrentPage((prewState) => prewState + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className={style.root}>
      <ul>
        {Array.isArray(apps)
          ? apps.map((item) => {
              return (
                <li>
                  <LiWrapper>
                    <div className={style.prewText}>
                      <p className={style.title}>{item.title}</p>
                      <p className={style.text}>{item.text}</p>
                    </div>

                    <ApplicationsVoting app={item} setApps={setApps} />
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
