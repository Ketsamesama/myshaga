import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProfileBtn.module.scss';

const ProfileBtn = () => <Link className={style.btn} to="/profile" />;

export default ProfileBtn;
