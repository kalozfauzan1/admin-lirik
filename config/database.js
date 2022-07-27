const path = require('path');
postgresql://kalozfauzan2:v2_3srX5_QQP8imsPCrhX7jixqrbMbJi@db.bit.io/kalozfauzan2/music
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.bit.io'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'kalozfauzan2/music'),
      user: env('DATABASE_USERNAME', 'kalozfauzan2'),
      password: env('DATABASE_PASSWORD', 'v2_3srX5_QQP8imsPCrhX7jixqrbMbJi'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
