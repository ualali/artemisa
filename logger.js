import pino from 'pino';

const logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  prettyPrint: {
    colorize: true,
    translateTime: true
  }
});

export default logger;
