var addon = require('bindings')('addon.node')
module.exports = {
    enableEval: (bool) => {
        if (bool) {
            return addon(1);
        } else {
            return addon(0);
        }
    }
};