# Employee Database

This application is built using the MERN (Mongo, Express, React, Node) stack

Simple CRUD operations supported:
<ul>
  <li>Insert new Employee data to employee database</li>
  <li>Read Employee data from employee database</li>
  <li>Update Employee data in employee database</li>
  <li>Delete Employee data from employee database</li>

</ul>

Try it out here ~~https://crudemernstack.herokuapp.com/~~ (Heroku no longer provides free web dynos, will be looking for alternative hosting sites. https://blog.heroku.com/next-chapter)

## Build and Run

### Start Server (Stay at root folder `crudemernstack`):

To set up your MongoDB connection, go to `index.js` and edit the uri variable to your mongodb connection uri:

```
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
```


Or set up a local env variable as follows:

`export mongodb=<MONGODB_CONNECTION_URI>`

Build: `npm install`

Run: `npm run start`

### Start Client (Go to `crudemernstack/client`):

Build: `npm install`

Run: `npm run start`

View: Navigate to `http://localhost:3000/`