import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { MuiThemeProvider } from '@material-ui/core';

import theme from 'theme';
import App from 'routes/App';

describe('<App />', () => {
  let shallow: any;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
