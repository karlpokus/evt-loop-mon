# evt-loop-mon
nodejs event loop monitoring

NodeJS is single threaded when it comes to executing js, only I/O is async. Let's see if we can find a reliable way of measuring how much we're blocking the main thread (i.e the event loop).

> Event loop lag measures the time span between the scheduling of a callback and its execution

# examples

```bash
# blocking
$ node crypto-sync
# non-blocking
$ node crypto-async
# from node stdlib on both sync and async hashing
$ node perf-hooks
```

# refs
https://medium.com/comsystoreply/monitoring-node-js-watch-your-event-loop-lag-c5071bc10f02

> anything above ~30 ms is worth investigating and values larger than ~100 ms should definitely make you worried

https://nodejs.org/api/perf_hooks.html#perf_hooks_perf_hooks_monitoreventloopdelay_options

# todos
- [ ] `process.hrtime()` vs `Date`
- [ ] add metric to perf monitoring dashboard
