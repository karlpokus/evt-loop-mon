const bcrypt = require("bcrypt")
const Lag = require('../lib/lag');
const lag = new Lag();

// async on worker thread
// yields to event loop thread
function hash(cb) {
  const start = new Date()
  const hashRounds = 10
  bcrypt.hash("hash me!", hashRounds, cb.bind(null, start));
}

lag.start();
hash(start => {
	console.log(`hash ${new Date() - start} ms`)
	lag.end();
});
