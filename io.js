const process = require('process');

console.log('Digite o seu nome')

process.stdin.on('data', (keyboard) => {
    process.stdout.write(`Texto do usuário ${keyboard}`)
    process.exit();
})
