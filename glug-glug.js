module.exports = (wrld) => {
  const world = wrld || 'world';
  if (world === 'wut') {
    console.log(`${world} in the world!?`);
  } else {
    console.log(`Hello, ${world}!!`);
  }
};
