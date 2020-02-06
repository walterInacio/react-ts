const errors: { [key: string]: string } = {
  nameRequired: 'Your name is required!',
  nameMax: 'This name is too long!',
  emailRequired: 'Seems you forgot to put your email, it is required!',
  emailInvalid: 'Invalid email address',
  genderRequired: 'Please select a gender',
  dateOfBirthRequired: 'Please select a date',
  alertUpdateTitle: 'Unable to update user',
  alertUpdateBody: 'User cannot be updated, check if the server is on!',
  alertGetTitle: 'Unable to get user information',
  alertGetBody:
    'The form will start with no values, if this is not intended make sure the server is on and that the user id is valid!',
};

export default errors;
