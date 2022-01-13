const fs = require ( 'fs' );

//criar arquivo
fs.writeFile('teste.txt', 'Olá Node.js', err => {
    console.log(err)
})


fs.appendFile('teste.txt','diego', err => {
    console.log(err)
})


fs.copyFile('./arquivoTeste/arquivo.txt', './arquivosCopiados/copia.txt', err => {
    console.log(err)
        
    })

