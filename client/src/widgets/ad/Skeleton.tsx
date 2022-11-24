import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import style from './Ad.module.scss';

const SkeletonAd = () => {
  return (
    <div className={style.skeletonRoot}>
      <Skeleton
        variant="text"
        sx={{ fontSize: '22px', width: '236px', margin: '0 auto 19px auto' }}
        className={style.title}
      />
      <Skeleton
        variant="rectangular"
        width={578}
        height={409}
        className={style.skeleton}
      />
      <Grid container wrap="nowrap">
        {Array.from(new Array(4)).map((item, index) => {
          return (
            <Skeleton
              variant="rectangular"
              width={90}
              height={90}
              sx={{ marginRight: 0.5, marginTop: 1, marginBottom: 2.4 }}
              key={index}
            />
          );
        })}
      </Grid>
      <Skeleton variant="text" sx={{ fontSize: '18px' }} />
      <Skeleton variant="text" sx={{ fontSize: '18px' }} />
      <Skeleton variant="text" sx={{ fontSize: '18px', marginBottom: 3.3 }} />

      <Grid
        container
        wrap="nowrap"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-between"
      >
        <Grid item>
          <Skeleton variant="text" sx={{ fontSize: '18px', width: 167 }} />
        </Grid>
        <Grid item>
          <Skeleton variant="text" sx={{ fontSize: '18px', width: 135 }} />
        </Grid>
      </Grid>
      <Grid container wrap="nowrap" justifyContent="space-between">
        <Grid item>
          <Skeleton variant="text" sx={{ fontSize: '18px', width: 276 }} />
        </Grid>
        <Grid item>
          <Skeleton variant="text" sx={{ fontSize: '18px', width: 167 }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SkeletonAd;
