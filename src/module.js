console.log('Module.js')

async function start() {
  return await Promise.resolve('aaaaaa');
}

start().then(console.log('asdasdsad'));
