import React, { FormEvent } from 'react';
import {
  Button,
  TextField,
  FormControl,
  Container,
  Grid,
} from '@material-ui/core';

import { reduxForm, Field, BaseFieldProps } from 'redux-form';

import strings from 'locales/login';

import HeaderComponent from 'components/Header/HeaderComponent';

import validate from 'routes/Login/validateFields';

import useStyles from './styles';

interface FormDataProps {
  input: BaseFieldProps<{}>;
  label: string;
  type: string;
  meta: {
    touched: boolean;
    error: boolean;
    warning: boolean;
  };
}

const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
};

const RequestField = ({
  input,
  meta: { touched, error },
  ...props
}: FormDataProps): JSX.Element => (
  <TextField error={error && touched} {...input} {...props} />
);

const Login = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.gridStyle}
    >
      <Container maxWidth="sm">
        <div className={classes.container}>
          <HeaderComponent title={strings.administration} />
          <form onSubmit={handleSubmit} className={classes.space}>
            <FormControl fullWidth>
              <Field
                type="text"
                name="name"
                label={strings.name}
                margin="normal"
                variant="outlined"
                component={RequestField}
              />
              <Field
                type="password"
                name="password"
                label={strings.password}
                margin="normal"
                variant="outlined"
                component={RequestField}
              />
              <Button variant="contained" color="secondary" size="large">
                {strings.access}
              </Button>
            </FormControl>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

const enhance = reduxForm({
  form: 'LoginForm',
  validate,
});

export default enhance(Login);
