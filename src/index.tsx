import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#F06292', light: '#FF94C2', dark: '#BA2D65' },
    secondary: { main: '#2196F3', light: '#6EC6FF', dark: '#0069C0' },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
