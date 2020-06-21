import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

//TODO CHANGE API ROUTE
const API_ROOT = 'https://europe-west1-u-box-f86ac.cloudfunctions.net/api/';

const responseBody = (res: any): any => res.body;

let token: string | null = null;
const tokenPlugin = (req: any) => {
  if (token) {
    req.set('authorization', `Bearer ${token}`);
  }
};

const requests = {
  del: (url: string) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url: string) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url: string, body: any) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url: string, body: any) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
};

const Auth = {
  current: () => requests.get('/users/user'),
  signIn: (user: any) => requests.post('/users/signin', user),
  signUp: (user: any) => requests.post('/users/signup', user),
};

export default {
  setToken: (_token: string) => {
    token = _token;
  },
  requests,
  Auth,
};
