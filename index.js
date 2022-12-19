const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const employee = require('./routes/employee')
app.use('/employee', employee)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}
// process.env.mongodb << indicates the key to be used to identify process
const uri = process.env.mongodb || 'mongodb://localhost:27017/crud-app'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false
},(err)=>{
    if(err){
        console.log('unable to connect to db')
        process.exit(1)
    }else{
        console.log('successfully connected to db')
    }
})


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log('app is running')
})

//HbSZXBLellm9i8g3