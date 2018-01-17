# evaless
node module to disable and enable eval in v8

Usage:
-----
```javascript
const evaless = require('evaless');

// disable eval
evalsess.enableEval(false);


// enable eval
evalsess.enableEval(true);

```

Warning:
--------

Evaless module is based on N-API and N-API is an experimental feature and could change at any time.