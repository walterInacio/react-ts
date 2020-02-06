import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useProfileAPI from 'hooks/use-profile-api';

import useStyles from './styles';
import ProfileForm, { FormValues } from './ProfileForm';

const Profile = (): JSX.Element => {
  const classes = useStyles();

  const [initialValues, setInitialValues] = useState<FormValues>({
    email: '',
    name: '',
    gender: '',
    dateOfBirth: null,
  });
  const [isFetching, setFetching] = useState(true);
  const [getUser] = useProfileAPI();

  useEffect(() => {
    let isMounted = true;
    const getAndSetFetch = async (): Promise<void> => {
      const user = await getUser();
      if (user) {
        setInitialValues(user);
      }
      if (isMounted) {
        setFetching(false);
      }
    };
    getAndSetFetch();

    return (): void => {
      isMounted = false;
    };
  }, [getUser]);

  return (
    <div className={classes.container}>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <ProfileForm initialValues={initialValues} />
      )}
    </div>
  );
};

export default Profile;
