function launchBrowser(browserName){
   if (browserName == 'Chrome'){
        console.log("The browser launched is" , browserName);
    } else {
       console.log("The browser launched is not Chrome, It is" , browserName);
        
    }
}
launchBrowser('Chrome');
launchBrowser('Edge');

function runTests(testType){
    
    switch (testType)
    {
        case "smoke":
            console.log("Testing type is smoke");
            break;

        case "sanity":
            console.log("Testing type is sanity");
            break;

        case "regression":
            console.log("Testing type is regression");
            break;

        default:
            console.log("Testing type is smoke");
            break;    
    }
}
runTests("regression");
runTests("default");