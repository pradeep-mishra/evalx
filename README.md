# evaldead
node module to disable and enable eval in v8

Usage:
-----
```javascript
const evaldead = require('evaldead');

// disable eval
evaldead.enableEval(false);


// enable eval
evaldead.enableEval(true);

```

Warning:
--------
N-API is an experimental feature and could change at any time.
**evaldead** module is based on N-API