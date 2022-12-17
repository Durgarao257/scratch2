import { LightningElement, wire,track} from 'lwc';
import getAgentList from '@salesforce/apex/homeclass.getAgentList';
import getPolicyHolderList from '@salesforce/apex/homeclass.getAgentList';
import getLifeInsurenceList from '@salesforce/apex/homeclass.getAgentList';
import getMoterInsurenceList from '@salesforce/apex/homeclass.getAgentList';

export default class InsurenceAppHome extends LightningElement {
    @track data;
    @track p;
    @track a;
    @track l;
    @track m;
    
   
    @wire(getAgentList)agent({data,error}){
      if(data){
        this.a=data;
      }
    }
     
    @wire(getPolicyHolderList)policy({data,error}){
      if(data){
        this.p=data;
      }
    }
    @wire(getLifeInsurenceList)LiC({data,error}){
      if(data){
        this.l=data;
      }
    }
    @wire(getMoterInsurenceList)mic({data,error}){
      if(data){
        this.m=data;
      }
    }

    
  }

   

   
   
    
    
   
        
      

              
        
        
    