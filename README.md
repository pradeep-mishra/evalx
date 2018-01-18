# evalx
node module to disable and enable eval in v8

Usage:
-----
```javascript
const evalx = require('evalx');

// disable eval
evalx.disableEval(true);


// enable eval
evalx.disableEval(false);

```

Warning:
--------
N-API is an experimental feature and could change at any time.
**evalx** module is based on N-API