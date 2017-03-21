'use strict';

module.exports = class ActionError {
  constructor(/*config*/) {
  }

  throwError() {
    throw new Error('action error');
  }

  static metadata(builder) {
    builder.usage.vpanel();
    builder.action('throwError');
  }
};
