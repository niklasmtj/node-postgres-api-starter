const app = require('express')();
const bodyParser = require('body-parser');
const port = 3000;

const db = require('./queries')

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.json({info: 'Node.js, Express and Postgress API starter'})
})

app.get('/users', db.getUsers)
app.get('/users/id', db.getUsersById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})