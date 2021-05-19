const cors = require('cors');
const express = require('express');
const userData = require('./data/users.json');

//Server

//config server
const app = express();
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

//API create endpoint

app.post('/api/user/login', (req, res) => {
  //take the data I recieve from navegator that are in req.body.player
  //check with this data in users array if user exists return the user's id
  const userFound = userData.find((user) => {
    return user.player === req.body.player && user.pin === req.body.pin;
  });
  if (userFound !== undefined) {
    // if user exists (not udefined)
    console.log('success');
    res.json({
      error: false,
      playerId: userFound.idPlayer,
    });
  } else {
    // if user doesnt exist return error
    console.log('error');
    res.status(404).json({
      error: 'match-not-found',
      message: 'Juego no encontrado. Por favor, inténtalo de nuevo',
    });
  }
});
