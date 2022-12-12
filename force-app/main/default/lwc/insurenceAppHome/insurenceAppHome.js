import { LightningElement, wire,track} from 'lwc';
import getAgentList from '@salesforce/apex/homeclass.getAgentList';

export default class InsurenceAppHome extends LightningElement {
    @track agent
    @wire(getAgentList)agent;

    carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"];
  programmingList = [
    {
      id: "06868",
      language: "HTML"
    },
    {
      id: "19797",
      language: "CSS"
    },
    {
      id: "298789",
      language: "Javascript"
    },
    {
      id: "398798",
      language: "Apex"
    },
    {
      id: "48967",
      language: "Aura"
    },
    {
      id: "58798",
      language: "Java"
    }
  ];


   
   
    
    
    handle(event){
        
        if([event.target.name]=='Agent'){

        }
    }
        
        
        
    }