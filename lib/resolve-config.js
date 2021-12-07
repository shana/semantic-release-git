const {isNil, castArray} = require('lodash');

module.exports = ({assets, message}) => ({
  assets: isNil(assets) ? ['.'] : assets ? castArray(assets) : assets,
  message,
});
