const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'MINHA_STRING_API'
    },
    Security: {
        secretyKey: 'MINHA_SECRETY_KEY'
    }
}
module.exports = variables;
