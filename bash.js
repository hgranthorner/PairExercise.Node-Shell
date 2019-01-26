const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt>')
process.stdin.on('data', data => {
  const cmd = data.toString().trim()
  if (cmd === 'pwd') {
    pwd()
  }
  if (cmd === 'hello') {
    process.stdout.write('hello to you too')
  }
  if (cmd === 'goodbye') {
    process.stdout.write('have a good evening')
  }
  if (cmd === 'ls') {
    ls();
  }
})


