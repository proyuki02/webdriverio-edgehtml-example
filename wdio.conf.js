require("ts-node").register({ transpileOnly: true });
module.exports = require(`./conf/${process.env.CONFIG}.wdio.conf.ts`);
