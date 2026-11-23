const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'xorazmiy-fergana-secret-key-2026-secure-by-tqm-in-20261123';

const generateToken = (admin) => {
  return jwt.sign(
    { username: admin.username, email: admin.email, role: 'admin' },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Ruxsat berilmagan! Avtorizatsiya talab etiladi.' });
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ success: false, message: 'Yaroqsiz yoki muddati o\'tgan token!' });
  }

  req.user = decoded;
  next();
};

module.exports = {
  generateToken,
  verifyToken,
  authMiddleware
};
