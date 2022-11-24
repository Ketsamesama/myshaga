import React from 'react';

import AddAdForm from 'features/adAddForm';
import AddPageWrapper from 'shared/addPageWrapper/AddPageWrapper';

import style from './AdAdd.module.scss';

const AddAd = () => {
  return (
    <AddPageWrapper title="Подача объявления">
      <AddAdForm />
    </AddPageWrapper>
  );
};

export default AddAd;
