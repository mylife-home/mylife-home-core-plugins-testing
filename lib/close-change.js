'use strict';

module.exports = class ActionError {
  constructor(/*config*/) {
    this.value = 'off';
  }

  close(done) {
    setTimeout(() => {
      this.value = 'on';
      return done();
    }, 1000)
  }

  static metadata(builder) {
    builder.usage.vpanel();
    builder.attribute('value', builder.enum('off', 'on'));
  }
};
