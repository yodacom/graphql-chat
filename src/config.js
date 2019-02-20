export const {
APP_PORT=4000,
NODE_ENV='development',
DB_USERNAME='yodacomdb1',
DB_PASSWORD='ChatData1975',
DB_HOST='ds343895.mlab.com',
DB_PORT=43895,
DB_NAME='graphchat',

  SESS_NAME = 'sid',
  SESS_SECRET = 'ssh!secret!',
  SESS_LIFETIME = 1000 * 60 * 60 * 2,

  REDIS_HOST = 'localhost',
  REDIS_PORT = 6379,
  REDIS_PASSWORD = 'secret'
} = process.env

export const IN_PROD = NODE_ENV === 'production'
