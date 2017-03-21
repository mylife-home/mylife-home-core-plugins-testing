'use strict';

module.exports = class CtorError {
  constructor(/*config*/) {
    throw new Error('ctor error');
  }

  static metadata(builder) {
    builder.usage.vpanel();
  }
};
