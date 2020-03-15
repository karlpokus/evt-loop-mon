const { monitorEventLoopDelay } = require('perf_hooks');

function Mon() {
	this.h = null;

	this.enable = function() {
		this.h = monitorEventLoopDelay();
		this.h.enable();
	}
	this.disable = function() {
		this.h.disable();
		const ms = (this.h.mean / 1e6).toFixed(0);
		console.log(`event loop lag avg ${ ms } ms`);

		/*console.log(h.min);
		console.log(h.max);
		console.log(h.stddev);
		console.log(h.percentiles);
		console.log(h.percentile(50));
		*/
	}
}

module.exports = Mon;
