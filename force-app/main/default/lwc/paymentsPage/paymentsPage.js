import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import PAYMENT_OBJECT from '@salesforce/schema/payments_Object__c';

import AMOUNT_FIELD from '@salesforce/schema/payments_Object__c.Premium_Amount__c';
import LIFE_INSURENCE_FIELD from '@salesforce/schema/payments_Object__c.Life_Insurence__c';
import MOTOR_INSURENCE_FIELD from '@salesforce/schema/payments_Object__c.Motor_Insurence__c';
import PAID_DATE_FIELD from '@salesforce/schema/payments_Object__c.paid_Date__c';

export default class PaymentsPage extends LightningElement {
    formFields={
        insurenceType:'null',
        id:'',
        Amount:'',
        Date:''
    }
    changeHandler(event){
        const{name,value}=event.target;
        this.formFields={...this.formFields,[name]:value}
        console.log('Entry done')
    }
    submit(){
        console.log('$formFields');

        fields={}
        fields[AMOUNT_FIELD.fieldApiName]=this.formFields.Amount
        if(this.formFields.insurenceType=='Life'){
        fields[LIFE_INSURENCE_FIELD]=this.formFields.id
    }else{
        fields[MOTOR_INSURENCE_FIELD]=this.formFields.id
    }
        fields[PAID_DATE_FIELD]=this.formFields.Date

        recordInput={apiName:PAYMENT_OBJECT.objectApiNmae,fields}

        createRecord({recordInput}).then(result=>{
            console.log(JSON.stringify(result.id))
        }).catch(error=>{
            console.error(error)
        })


    }
}