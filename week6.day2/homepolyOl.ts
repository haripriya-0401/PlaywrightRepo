class APIClient{
    
sendRequest(endpoint: string): void;
sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void;

    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean):void{
        if(requestBody!== undefined && requestStatus !== undefined){
        console.log("Req sent with EP, body and status")
    }else{
        console.log("Req sent with EP ")
    }
}
}

function APIdemo(){

let client = new APIClient()
client.sendRequest("END");                        
client.sendRequest("END","END",true)

}
APIdemo()