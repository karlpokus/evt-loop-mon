const bcryptjs = require("bcryptjs");
const bcrypt = require("bcrypt")
const Mon = require('../lib/perfh');
const syncMon = new Mon();
const asyncMon = new Mon();

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

syncMon.enable();
syncHash(start => {
	console.log(`synchash ${new Date() - start} ms`);
	syncMon.disable();
	asyncMon.enable();
	asyncHash(start => {
		console.log(`asynchash ${new Date() - start} ms`);
		asyncMon.disable();
	});
});
