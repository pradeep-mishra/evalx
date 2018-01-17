# evaless
node module to disable and enable eval in v8

Usage:
-----
```javascript
const evaless = require('evaless');

// disable eval
evaless.enableEval(false);


// enable eval
evaless.enableEval(true);

```

Warning:
--------
N-API is an experimental feature and could change at any time.
**evaless** module is based on N-API