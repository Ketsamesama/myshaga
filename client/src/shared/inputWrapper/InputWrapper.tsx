import React, { FC, useState } from 'react';
import { ControllerProps } from 'react-hook-form/dist/types/controller';
import style from './InputWrapper.module.scss';

interface IProps {
  field: any;
  element: string;
  styles: any;
  type: string;
  title: string;
  errors?: any;
}

type CheckboxType = 'password' | 'text';

const InputWrapper: FC<IProps> = ({
  element,
  title,
  styles,
  type,
  field,
  errors,
}) => {
  const [checkboxType, setCheckboxType] = useState<CheckboxType>('password');

  const hendlerCheckbox = () => {
    checkboxType === 'password'
      ? setCheckboxType('text')
      : setCheckboxType('password');
  };

  if (field.name === 'password' || field.name === 'confirmPassword') {
    return (
      <div className={`${style.inputWrapper} ${styles}`}>
        <p className={style.title}>{title}</p>
        <input
          type="checkbox"
          className={style.customCheckbox}
          id={`fakeCheckboxFrom${field.name}`}
          onChange={hendlerCheckbox}
        />
        <label htmlFor={`fakeCheckboxFrom${field.name}`}></label>
        {React.createElement(element, {
          class: style[element],
          ...field,
          type: checkboxType,
        })}
        <p className={style.errors}>{errors[field.name]?.message}</p>
      </div>
    );
  }

  return (
    <div className={`${style.inputWrapper} ${styles}`}>
      <p className={style.title}>{title}</p>
      {React.createElement(element, {
        class: style[element],
        ...field,
        type: type,
      })}
    </div>
  );
};

export default InputWrapper;
