import React, { useMemo } from 'react';
import { MenuItem } from '@material-ui/core';
import { TextField, TextFieldProps } from 'formik-material-ui';

import useStyles from './styles';

interface Props {
  alias: string;
  props?: TextFieldProps;
}

const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const GenderPicker = ({ alias }: Props): JSX.Element => {
  const classes = useStyles();

  const genderItems = useMemo(
    () =>
      genders.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )),
    [],
  );
  return (
    <TextField
      id={alias}
      name={alias}
      select
      label="Gender"
      className={classes.item}
    >
      {genderItems}
    </TextField>
  );
};

export default GenderPicker;
