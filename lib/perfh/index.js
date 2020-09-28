const { monitorEventLoopDelay } = require('perf_hooks');

function Mon() {
	this.h = null;

	this.enable = function() {
		this.h = monitorEventLoopDelay();
		this.h.enable();
	}
	this.avg = function() {
		const avgMs = (this.h.mean / 1e6).toFixed(0);
		const p95Ms = (this.h.percentile(95) / 1e6).toFixed(0);
		const maxMs = (this.h.max / 1e6).toFixed(0);
		console.log(`event loop lag avg:${ avgMs }ms, p95:${ p95Ms }ms, max:${ maxMs }ms`);
		/*console.log(h.min);
		console.log(h.max);
		console.log(h.stddev);
		console.log(h.percentiles);
		console.log(h.percentile(50));
		*/
	}
	this.disable = function() {
		this.h.disable();
	}
	this.reset = function() {
		this.h.reset();
	}
}

module.exports = Mon;
