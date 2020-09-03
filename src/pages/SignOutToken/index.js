import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';

import WaveLoading from '~/components/WaveLoading';

const SignOutToken = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
      dispatch(signOut());
    }, 1000);
  }, []);
  return loading && <WaveLoading />;
};

export default SignOutToken;
