'use strict';

module.exports = function(wrld) {
  var world = wrld || 'world';
  if (world === 'wut') {
    return world + ' in the world!?';
  } else {
    return 'Hello, ' + world + '!!';
  }
};
