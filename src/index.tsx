import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import AppContainer from './AppContainer';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#ba68c8', light: '#ee98fb', dark: '#883997' },
    secondary: { main: '#2196F3', light: '#6EC6FF', dark: '#0069C0' },
    type: 'dark',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
