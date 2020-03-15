const bcryptjs = require("bcryptjs");
const bcrypt = require("bcrypt")
const Mon = require('../lib/perfh');
const mon = new Mon();

function syncHash(cb) {
  const start = new Date()
  const hashRounds = 10
  bcryptjs.hash("hash me!", hashRounds, cb.bind(null, start));
}

function asyncHash(cb) {
  const start = new Date()
  const hashRounds = 10
  bcrypt.hash("hash me!", hashRounds, cb.bind(null, start));
}

mon.enable();
syncHash(start => {
	console.log(`synchash ${new Date() - start} ms`);
	mon.avg();
	mon.reset();
	asyncHash(start => {
		console.log(`asynchash ${new Date() - start} ms`);
		mon.avg();
		mon.disable();
	});
});
