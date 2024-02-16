import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  // Read expiry time from environment variable
  const jwtExpiryMinutes = process.env.JWT_EXPIRIES;
  const expiresInMilliseconds = jwtExpiryMinutes * 60 * 1000;

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: expiresInMilliseconds,
  });

  // Set JWT as an HTTP-Only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: expiresInMilliseconds,
  });
};

export default generateToken;
