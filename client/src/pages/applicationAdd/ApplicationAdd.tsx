import React from 'react';
import ApplicationAddForm from 'features/applicationAddForm';

import AddPageWrapper from 'shared/addPageWrapper';

const ApplicationAdd = () => {
  return (
    <AddPageWrapper title="Подача петиции">
      <ApplicationAddForm />
    </AddPageWrapper>
  );
};

export default ApplicationAdd;
