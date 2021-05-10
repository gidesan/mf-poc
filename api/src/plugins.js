import request from './request';

export const addPlugin = async(config) => {
  return request('/plugins', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(config),
  });  
};

export const fetchPlugins = async() => {
  console.log('fetchPlugins called')
  return request('/plugins');
}

// {
//   url: 'http://localhost:3003/remoteEntry.js',
//   scope: 'app3',
//   module: './Widget',
// }