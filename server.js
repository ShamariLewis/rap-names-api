const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'drake': {
        'age': 35,
        'birthName': 'Aubrey Graham',
        'birthLocation': 'Ontario, Canada'
    }
}



app.get('/', (req, res) => {
    //__dirname is saying here that wherever the server.js file is located, that's where we're gonna start looking for our file, in this case, the index.html.
    res.sendFile(__dirname + '/index.html')
})

//The rapperName apppended to the api lets you request by rapper name. This would be a query parameter on the url. The colon before the rapperName denotes that its a query parameter to be passed in with the api url.
app.get('/api/:rapperName', (req, res) => {
    //console.log(req.params.rapperName)
    //res.json(rappers)
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    } else {
        console.log('Name not found.')
    }
})

//The process.env.PORT says use the port that heroku is trying to let us use, or if that doesn't exist, then used the port that we've already defined. In our case, port 8000. Eventually we'll start working with an env file.
app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is running or Port ${PORT}. You better catch it.`)
})
