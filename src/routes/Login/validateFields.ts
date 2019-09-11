import { FormErrors } from 'redux-form';

import locales from 'locales/login';

interface FormData {
  name?: string;
  password?: string;
  email?: string;
}

const validate = (values: FormData): FormErrors<FormData, string> => {
  const error: FormData = {};

  if (!values.name) error.name = locales.required;
  else if (values.name.trim() === '') error.name = locales.invalidName;

  if (!values.password) error.password = locales.required;
  else if (values.password.trim() === '')
    error.password = locales.invalidPasword;

  return error;
};

export default validate;
