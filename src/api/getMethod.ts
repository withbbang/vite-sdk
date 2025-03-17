/**
 * @description Get method
 * @param {string} url URL
 * @returns {Promise<any>}
 */
export function getMethod(url: string): Promise<any> {
  console.debug('URL: ', url);

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // credentials: 'include',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        console.debug('result: ', result);

        const {
          // result: { code, message },
          data,
        } = result;

        // if (code !== '000000') {}

        resolve(data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}
