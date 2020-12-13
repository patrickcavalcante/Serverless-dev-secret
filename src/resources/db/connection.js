const mongoose = require('mongoose')

let conn = null

const URI = 'mongodb+srv://patrick:Airgear123@cluster0.7u05r.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async () => {
    if (!conn) {
        conn = mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        await conn
    }
}

// Boa tarde!
// Segue o link da aula: https://front-end-next-sigma.vercel.app/
// Não esta aparecendo os participantes pode me ajudar por gentileza...
// Link do repositório:
// - Front-end: https://github.com/paulosarmento/FrontEnd-Next
// - Back-end: https://github.com/paulosarmento/Serverless
// Obrigado!