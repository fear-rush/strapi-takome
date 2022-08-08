module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3adf932e769329315e06d5b68dd21e2d'),
  },
});
