var express = require('express');
var router = express.Router();

const userInfo = {
  han: {
    password: '1234',
  },
  kim: {
    password: '123123',
  },
};

/* GET users listing. */
router.get('/login/:username/:password', (req, res) => {
  const session = req.session;
  const { username, password } = req.params;
  if (!userInfo[username]) {
    res.status(400).json({
      message: 'user not found',
    });
  }

  router.get('/', (req, res) => {
    const session = req.session;
    res.render('index', { username: session.username });
  });

  if (userInfo[username]['password'] === password) {
    session.username = username;
    res.status(200).json({
      message: 'login success',
    });
  } else {
    res.status(400).json({
      message: 'wrong password',
    });
  }
});

router.get('/logout', (req, res) => {
  const session = req.session;
  if (session.username) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/users');
      }
    });
  } else {
    res.redirect('/users');
  }
});

module.exports = router;
