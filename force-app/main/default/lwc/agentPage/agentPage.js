import { LightningElement,track,api,wire } from 'lwc';
import myAgent from '@salesforce/apex/homeclass.myAgent'
import { createRecord } from 'lightning/uiRecordApi';

import AGENT_OBJECT from '@salesforce/schema/agent__c';
import NAME_FIELD from '@salesforce/schema/agent__c.Agent_Name__c';
import ID_FIELD from '@salesforce/schema/agent__c.Name';
import EMAIL_FIELD from '@salesforce/schema/agent__c.Email__c';
import PHONE_FIELD from '@salesforce/schema/agent__c.Phone__c';
import DOB_FIELD from '@salesforce/schema/agent__c.DOB__c';
import GENDER_FIELD from '@salesforce/schema/agent__c.Gender__c';

export default class AgentPage extends LightningElement {
   @track Agentform=true;
   @track viewAgent=false;
   @track myAgentDetails
   @track Agent_Name__c
   @track DOB__c
   @track Email__c
    @track Gender__c
    @track Id
    @track Name
    @track  Phone__c
   @track error
   formField={
    Name:'',
    Email:'',
    Phone:'',
    Dob:'',
    Gender:''
   }

   changeHandler(event){
    const{name,value}=event.target;
    console.log(name,value)
    this.formField={...this.formField,[event.target.name]:value}
    console.log(this.formField);
}

handle(){
    
    console.log(this.formField);
   console.log('submit clicked')
    console.log(this.formField)
const fields={}
fields[NAME_FIELD.fieldApiName]=this.formField.Name;
fields[EMAIL_FIELD.fieldApiName]=this.formField.Email;
fields[PHONE_FIELD.fieldApiName]=this.formField.Phone;
fields[DOB_FIELD.fieldApiName]=this.formField.Dob;
fields[GENDER_FIELD.fieldApiName]=this.formField.Gender;
console.log(fields)
let recordInPut={apiName:AGENT_OBJECT.objectApiName,fields}

createRecord(recordInPut).then(result=>{
    this.formField={}
    console.log(JSON.stringify(result.id))
}).catch(error=>{
    console.error(error)
})

}

    handleAgent(){
        this.Agentform=!this.Agentform;   
        console.log('click done on agent form');
    }
    handleViewAgent(){
        console.log('click done on view form');
        this.viewAgent=!this.viewAgent;
    }
    @wire(myAgent)myAgentDetails({data,error}){
        if(data){
            const{Agent_Name__c,DOB__c,Email__c, Gender__c,Id,Name,Phone__c }=data;
            console.log(Agent_Name__c,DOB__c,Email__c, Gender__c,Id,Name,Phone__c);
   this.Agent_Name__c=Agent_Name__c;
   this.DOB__c=DOB__c
   this.Email__c=Email__c
   this.Gender__c=Gender__c
   this.Id=Id
   this.Name=Name
   this.Phone__c=Phone__c



   console.log(Agent_Name__c,DOB__c,Email__c);

            

        }
    }
    

}




