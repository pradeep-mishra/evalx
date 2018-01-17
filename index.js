var addon = require('./build/Release/addon')
module.exports = {
    enableEval: (bool) => {
        if (bool) {
            return addon(1);
        } else {
            return addon(0);
        }
    }
};