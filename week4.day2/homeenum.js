"use strict";
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "local env";
    Environment["DEVELOPMENT"] = "dev env";
    Environment["STAGING"] = "staging env";
    Environment["PRODUCTION"] = "prod env";
})(Environment || (Environment = {}));
function runTests(envs) {
    console.log('Environment used is', envs); //PRINT the value of the argument passed to the function
}
runTests(Environment.LOCAL);
