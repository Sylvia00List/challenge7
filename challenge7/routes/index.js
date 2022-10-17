const express = require("express");
const router = express.Router();
const superuser = require("../superuser.json");
const userdataRouter = require("./apiUserData");
const passport = require("../lib/passport");
const { users } = require("../models");
const jwt = require("jsonwebtoken");
//const {token} = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");
const roomController = require('../controllers/roomController');
const authApi = require("../middleware/authMiddleware");
const bcrypt = require("bcrypt");
const { request } = require("express");

//jsonwebtoken
router.get("/token", function (req, res) {
 // const token = jwt.sign({ username: "sylvial", userId: 1 }, 'secret-key');
  const token = jwt.sign({ username: "sylvial" }, 'secret-key');
   res.json({
    token,
});
})


/* GET home page */
router.get("/", (req, res) => {
  res.render("index", { user: req.user });
});
/*GET Dashboard Page*/
router.get('/dashboard', function(req, res) {
  res.render('dashboard');
});
/*GET Play Game Page*/
router.get('/play', function(req, res) {
  res.render('play');
  });  
//GET Logout
router.get("/logout", function (req, res, next) {
  req.session.is_logged_in = false;
  res.send("berhasil logout");
});




//FOR DASHBOARD

//import model user_game//
const {user_game} = require('../models'); 
router.get('/usergame', async (req, res) => {
  const data = await user_game.findAll();
  console.log(data);
    res.json(data);
});
router.post('/usergame', async (req, res) => {
  const {name, email, paswword, approved } = req.body;
  const data = await user_game.create();
  console.log(data);
   res.json(data);
});

//import model user_game_biodata//
const {user_game_biodata} = require('../models'); 
router.get('/biodata', async (req, res) => {
  const data = await user_game_biodata.findAll();
  console.log(data);
    res.json(data);
});
router.post('/biodata', async (req, res) => {
  const {name, userId, address,phone, approved } = req.body;
  const data = await user_game_biodata.create();
  console.log(data);
   res.json(data);
});
//import model user_game_history//
const {user_game_history} = require('../models'); 
router.get('/history', async (req, res) => {
  const data = await user_game_history.findAll();
  console.log(data);
    res.json(data);
});
router.post('/history', async (req, res) => {
  const {name, userId, match, level, approved } = req.body;
  const data = await user_game_history.create();
  console.log(data);
    res.json(data);
  });
router.get('/userdata/list', function(req, res) {
  res.render('userdata/list');
});  

//Create Room
//=> tulis di router/index, buat role  midleware,buat tabel room psql(isi name saja),db migrate,buat controller/roomController
//npm run dev, lalu buat room pada postman http://localhost:3000/rooms, isi pharam name : Room 1
//ubah roomController res.json(result.id);menjadi res.json({roomId: result.id});
//dan ubah res.json(err.message); menjadi res.json({error: err.message}); ,check postman lagi buat name:  Room 2
//ubah router index bagian post roomId lalu buat 1tabel lagi kalah menangnya di game history.
//Ubah dulu routes/index bagian post room create
//return roomID

router.post("/rooms/" , roomController.create);

//router.post("/rooms/", 
//authMiddleware.authApi , roomController.create);

//body {username, item; 'Gunting' | 'Batu' | 'Kertas'}
//get roomId
//simpan ke database username, roomId, Item;
//Logic bermain

//router.post("/room/:roomId/fight/", roomController.fight);
//router.post ("/rooms/fight/:roomId', roomController.fight);

// MVC register
router.get("/register", (req, res) => res.render("register"));
router.post("/register", (req, res) => {
  users
    .register(req.body)
    .then(() => {
      res.redirect("/login");
    })
    .catch((err) => { console.log(err)})

});

// MVC login
router.get('/login', function (req, res, next) {
  res.render('login');
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// MCR
//router.get("/users", (req, res) => res.render("users"));
router.get("/users", (req, res) => {
  authMiddleware,authApi,
  
  users
    .findAll()
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      res.json({
        err: err.message,
      });
    });
  
 });
 

router.post("/users", (req, res) => {
  const { username, password } = req.body;
  users
    .register({
      username,
      password,
    })
    .then((result) => {
      res.json({
        message: "new user berhasil dibuat",
      });
    });
});



//MCR/RESTAPI jsonWebToken
router.post("/user/login", async function (req, res, next) {
  const { username, password } = req.body;

  const userData = await users.findOne({
    where: {username,}
  });

  const token = jwt.sign(
    {
      username: userData.username,
      userId: userData.id,
      isSuperuser: userData.isSuperuser,
    },
   // "123456"
    "secret-key"
  );

  users
    .authenticate({ username, password })
    .then(() => {
      return res.json({
        token: token,
      });
    })
    .catch(() => {
      return res.json({
        message: "username or password tidak sesuai",
      });
    });
});

module.exports = router;



