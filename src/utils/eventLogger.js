const pino = require('pino')

const logger = pino({
  prettyPrint: { 
    colorize: true,
    ignore: 'level,time,pid,hostname'
  }
});

module.exports = logger;