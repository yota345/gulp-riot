'use strict';

module.exports = {

  'Contents test' : function (browser) {
    browser
      .url('http://localhost:9100/')
      .pause(1000)
      .assert.title('gulp-riot')
      .assert.containsText('#content', 'Hello, gulp-riot app!!')
      .end();
  }

};
