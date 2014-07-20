"use strict";
var Gearman = require('abraxas');

module.exports = function (argv) {
    Gearman.Server.listen();
}
