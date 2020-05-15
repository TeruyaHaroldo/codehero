import md5 from 'js-md5';

const PUBLIC_KEY = 'fdb7b34c43469388c938cb797654b37c';
const PRIVATE_KEY = 'dc2ce55b29a64d812c3d5aea77f1b4552b054eee';

class RequestError extends Error {
  constructor(status, body) {
    super('Request Error');

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, RequestError);
    } else {
      this.stack = new Error().stack;
    }

    this.status = status;
    this.body = body;
  }
}

const ApiHelper = {
  fetch: async (method, url, urlParams = undefined, body = undefined) => {
    let urlFormatted = `${url}?`;
    if (urlParams) {
      Object.keys(urlParams).forEach((key) => {
        if (
          typeof urlParams[key] !== 'undefined' &&
          urlParams[key] !== null &&
          urlParams[key] !== ''
        ) {
          urlFormatted += `${key}=${urlParams[key]}&`;
        }
      });
    }

    const timestamp = new Date().getTime();
    const hash = md5.create();
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    urlFormatted += `ts=${timestamp}&`;
    urlFormatted += `apikey=${PUBLIC_KEY}&`;
    urlFormatted += `hash=${hash.hex()}`;

    try {
      const response = await fetch(urlFormatted, {
        method,
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.status === 200) {
        return await response.json();
      }

      throw new RequestError(response.status, await response.json());
    } catch (e) {
      throw e;
    }
  },
};

export default ApiHelper;
