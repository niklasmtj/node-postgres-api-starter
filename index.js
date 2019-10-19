const app = require("express")();
const bodyParser = require("body-parser");
const port = 3000;

const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express and Postgress API starter" });
});

//gets all users from postgres
app.get("/users", db.getUsers);

// gets one user identified its unique ID
app.get("/users/id", db.getUsersById);

// adds a new user to postgres
app.post("/users", db.createUser);

// updates an user identified by its unique ID to define the to be updated user
app.put("/users/:id", db.updateUser);

// deletes a user from postgres identified by its ID
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
