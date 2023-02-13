const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use( 
    express.urlencoded({
        extendes: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.listem(3000)