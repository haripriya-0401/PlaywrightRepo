enum Environment {                              //Create an enum named `Environment
    LOCAL = 'local env',
    DEVELOPMENT = 'dev env',
    STAGING = 'staging env',
    PRODUCTION = 'prod env'
}
function runTests(envs:Environment):void{        //function named runTests argument of type Environment
    console.log('Environment used is', envs)        //PRINT the value of the argument passed to the function
}
runTests(Environment.LOCAL)