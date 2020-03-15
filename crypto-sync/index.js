const bcrypt = require("bcryptjs");
const Lag = require('../lib/lag');
const lag = new Lag();

// cryptographically weak and synchronous
// Although bcrypt does some non-blocking, preparatory work before the actual
// hashing begins in which the event loop may iterate.
function hash(cb) {
  const start = new Date()
  const hashRounds = 10
  bcrypt.hash("hash me!", hashRounds, cb.bind(null, start));
}

lag.start();
hash(start => {
	console.log(`hash ${new Date() - start} ms`);
	lag.end();
});
