import jwt from 'jsonwebtoken';

function verifyToken(req, res, next) {
  const { token } = req.cookies;
  if (!token) res.status(400).json({ message: 'You must be logged in' });
  else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) res.status(400).json({ message: 'Invalid token' });
      else {
        req.userId = decoded.id;
        next();
      }
    });
  }
}


export default verifyToken;
