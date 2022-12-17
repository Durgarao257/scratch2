import { LightningElement,wire,api,track } from 'lwc';
import AccountData from '@salesforce/apex/GetAccounts.AccountData'

export default class GetAccount extends LightningElement {
    @track Accounts
   @wire(AccountData)wiredData({data,error}){
        if(data){
            console.log(data);
            this.Accounts=data;
        }
        if(error){
            console.error(error);
        }
    }                                       
   /* @track Accounts
    handle(){
    AccountData().then(result=>{this.Accounts=result;
    console.log("data received");
    })
    .catch(error=>{console(error)});
}*/
}

    
