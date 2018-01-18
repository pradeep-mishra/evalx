var addon = require('./build/Release/addon')
module.exports = {
    disableEval: (bool) => {
        if (bool) {
            return addon(0);
        } else {
            return addon(1);
        }
    }
};