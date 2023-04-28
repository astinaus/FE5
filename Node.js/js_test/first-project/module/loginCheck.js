const loginCheck = (req, res, next) => {
  const userLogin = false;
  if (userLogin) {
    next();
  } else {
    res.status(401).json({
      message: 'login fail',
    });
  }
};

module.exports = loginCheck;
