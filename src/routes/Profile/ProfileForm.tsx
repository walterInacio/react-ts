import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { Formik, Form } from 'formik';

import { TextField } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import momentUtils from '@date-io/moment';

import dateFormat from 'constants/dateFormat';

import locales from 'locales/profile';

import { User, UserWithId } from 'api/profile';

import useProfileAPI from 'hooks/use-profile-api';

import GenderPicker from './GenderPicker';
import validationSchema from './schema';
import useStyles from './styles';

export interface FormValues {
  name: string;
  email: string;
  gender: string;
  dateOfBirth?: Date | null;
}

interface Props {
  initialValues: FormValues;
}

const ProfileForm = ({ initialValues }: Props): JSX.Element => {
  const classes = useStyles();
  const [, putUser] = useProfileAPI();

  const updateUser = useCallback(
    async (values): Promise<UserWithId | undefined> => {
      const updatedUser: User = {
        ...values,
        dateOfBirth:
          // new Date will never happen if there is proper date validation
          values.dateOfBirth || initialValues.dateOfBirth || new Date(),
      };
      const user = await putUser(updatedUser);
      return user;
    },
    [initialValues.dateOfBirth, putUser],
  );

  return (
    <MuiPickersUtilsProvider utils={momentUtils}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={updateUser}
      >
        {({ submitForm, isSubmitting }): JSX.Element => (
          // translate='yes' is a workaround a bug that is yet to be solved by Formik
          // Link: https://github.com/jaredpalmer/formik/issues/2120
          <Form translate="yes" className={classes.form}>
            <TextField
              id="name"
              name="name"
              type="name"
              label={locales.titles.name}
              className={classes.item}
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label={locales.titles.email}
              className={classes.item}
            />
            <GenderPicker alias="gender" />
            <DatePicker
              clearable
              name="dateOfBirth"
              label={locales.titles.dateOfBirth}
              disableFuture
              format={dateFormat.dateOfBirth}
              className={classes.item}
            />
            <Button
              className={classes.submit}
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              {locales.buttons.submit}
            </Button>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default ProfileForm;
