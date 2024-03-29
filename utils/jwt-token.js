const jwt = require("jsonwebtoken");

const config = {
  SESSION: {
    jwtSecret: 'Mobifone3-m-Inovation-2020-02-15',
    expiresIn: '10h'
  }
}

class TokenHandler {

  jwtToken(data) {
    try {
      return jwt.sign(data, config.SESSION.jwtSecret, { expiresIn: config.SESSION.expiresIn });
    } catch {
      return null;
    }
  }

  pareJwtToken(token) {
    try {
      return jwt.verify(token, config.SESSION.jwtSecret);
    } catch {
      return null;
    }
  }

}

module.exports = new TokenHandler();