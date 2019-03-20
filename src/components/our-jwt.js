import jwt from 'jsonwebtoken';

export default class JWT{
  constructor(){
    this.x = jwt;
    this.secret = 'sssss';
    this.expiresIn = '1000'; //miliseconds. See jsonwebtoken docs for more options.
  }

  getToken(user){
    return this.x.sign({ username: user }, this.secret, { expiresIn: this.expiresIn });
  }

  verifyToken(token){
    return jwt.verify(token, this.secret, function(err, decoded) {
      if (err) {
        console.log("Invalid Token");
        /*
          err = {
            name: 'TokenExpiredError',
            message: 'jwt expired',
            expiredAt: 1408621000
          }
        */
      }
      else{
        console.log("Valid Token", decoded);
      }
    });
  }
}