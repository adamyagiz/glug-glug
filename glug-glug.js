'use strict';

module.exports = function(wrld) {
  let world = wrld ? wrld : 'world';
  if (world == 'wut') {
    console.log(`${world} in the world!?`);
  } else {
    console.log(`Hello, ${world}!!`);
  }
};
