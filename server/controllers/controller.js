const axios = require('axios')

class Controller {
    static async readAll (req, res, next) {
        try {
            const joke = await axios({
                url: 'https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart&idRange=0-200&amount=10',
                method: 'GET'
            })
            res.status(200).json(joke.data)
        } catch (err) {
            let status = err.status || 500
            let msg = err.msg || 'Internal Server Error'
            res.status(status).json({msg})
        }
    }
}

module.exports = Controller