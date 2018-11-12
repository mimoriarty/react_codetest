import CONSTANTS from './constants';

const url = CONSTANTS.url;
const getToken = 'user/session';
const callApi = (fn) => {
  return fetch(
    url.concat(fn),
    {
      headers: CONSTANTS.headers
    }
  );
};
let token;

async function callToken () {
  const resSession = await callApi(getToken);
  const tokenData = await resSession.json();

  token = tokenData.token;

  return token;
}

async function execService (fn) {
  let res = await callApi(fn);
  let counter = 0;

  while (res.status === CONSTANTS.Error || counter > 3) {
    counter++;
    token = await callToken();
    res = await callApi(fn);
  }

  return res;
}

export default {
  callToken,
  execService
};
