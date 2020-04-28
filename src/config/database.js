require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: '40.121.130.233',
  username: 'postgres',
  password: 'urMLm6HW',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
