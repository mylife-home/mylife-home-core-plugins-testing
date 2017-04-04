'use strict';

const log4js = require('log4js');
const logger = log4js.getLogger('core-plugins-testing.ShowPath');

module.exports = class ShowPath {
  constructor(/*config*/) {
    logger.debug(process.env.PATH);
  }

  static metadata(builder) {
    builder.usage.vpanel();
  }
};
