// very quick and dirty
function Lag() {
	this.lags = [];
	this.running = true;

	// get the current time
	// push a timer callback in the callback queue
	// Within the callback, calculate event loop lag
	// non-blocking
	this.start = function() {
	  const start = new Date()
	  setTimeout(() => {
	    const lag = new Date() - start
			this.lags.push(lag);
	    //console.log(`lag ${lag} ms`)
			if (this.running) {
				this.start();
			}
	  })
	}
	this.avg = function() {
		const sum = this.lags.reduce((acc, v) => acc + v, 0);
		const avg = sum / this.lags.length;
		console.log(`avg evt loop lag ${ avg.toFixed(2) } ms`);
	}
	this.end = function() {
		this.running = false;
		this.avg();
	}
}

module.exports = Lag;
