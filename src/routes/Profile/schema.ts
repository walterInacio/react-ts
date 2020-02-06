import * as Yup from 'yup';

import locales from 'locales/profile';

const formsSchema = Yup.object({
  name: Yup.string()
    .max(15, locales.errors.nameMax)
    .required(locales.errors.nameRequired),
  email: Yup.string()
    .email(locales.errors.emailInvalid)
    .required(locales.errors.emailRequired),
  gender: Yup.string().required(locales.errors.genderRequired),
});

export default formsSchema;
