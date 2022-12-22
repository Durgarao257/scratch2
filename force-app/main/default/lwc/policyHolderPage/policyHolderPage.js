import { LightningElement,wire,track,api } from 'lwc';
import lifeData1 from '@salesforce/apex/homeclass.lifeData'
import MotorData1 from '@salesforce/apex/homeclass.MotorData'

export default class PolicyHolderPage extends LightningElement {
    @track showdata=true;
    @track phId=null
    @track lifeType='Life Insurence'
    @track motorType='Motor Insurnce'
    @track lifeData =null;
    @track MotorData =null;
    handle(event){
        this.phId=event.target.value;
        console.log(this.phId)
    }
    @wire(lifeData1,{data:'$phId'})data12({data,error}){
        if(data){
            console.log(data)
        }
    }
    submitHandle(){
    
    
    
        lifeData1({data:this.phId}).then(result=>{
            this.lifeData=result;
            console.log(result);
        }).catch(error=>{
            console.error(error)
        });
       
        MotorData1({data:this.phId}).then(result=>{
          this.MotorData=result;
          console.log(result);
        }).catch(error=>{
            console.error(error);
        });

    }
}