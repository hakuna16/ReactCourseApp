if (process.env.NODE_ENV === 'PRODUCTOIN') {
  module.export = require('./configureStore.prod');
} else {
  module.export = require('./configureStore.dev');
}
