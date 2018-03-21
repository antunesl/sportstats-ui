import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  var apiKeyValue = process.env.apiKey;

  // if (!apiKeyValue)
  //   throw Error('ApiKey is not defined in configuration.');
  
  options.baseURL = `http://wigserver.myvnc.com:3000/api/`;
  // options.headers = { 'api_key': apiKeyValue };
}

export default axios.create(options)
