const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('No token provided');

  const decoded = jwt.decode(token);
  if (!decoded || !decoded.groups.includes('owners')) {
    return res.status(403).send('Access denied');
  }

  req.user = decoded;
  next();
};

module.exports = verifyToken;
