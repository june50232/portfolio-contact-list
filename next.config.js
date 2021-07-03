const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_URL: 'https://taroko-contacts-server.herokuapp.com',
  },
};
