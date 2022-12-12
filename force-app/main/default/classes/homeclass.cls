public with sharing class homeclass {
   
   //------------------------------------
    @AuraEnabled
    public static List<agent__c> getAgentList(){
        try{
        List<agent__c>Agent=new List<agent__c>();
             Agent= [select Name,Agent_Name__c,Email__c,Phone__c from agent__c ];
             return Agent;
            
        } catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    //---------------------------------------

        @AuraEnabled
    public static List<Policy_Holder__c> getPolicyHolderList(){
        try{
        List<Policy_Holder__c>Policy=new List<Policy_Holder__c>();
                 Policy=[SELECT Ph_Id__c,Name,Email__c,Phone__c FROM Policy_Holder__c ];
                 return Policy;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    //------------------------------------------
    @AuraEnabled
    public static List<Life_Insurence__c> getLifeInsurenceList(){
        try{
        List<Life_Insurence__c>Life=new List<Life_Insurence__c>();
             Life=[SELECT Name,Policy_Holder__c,No_Of_Terms__c,agent_ID__c FROM Life_Insurence__c];
             return Life;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    //---------------------------------------------
    @AuraEnabled
    public static List<Motor_Insurence__c> getMoterInsurenceList(){
        try{
        List<Motor_Insurence__c>moter=new List<Motor_Insurence__c>();

        moter=[SELECT Name,Policy_Holder__c,NO_Of_Terms__c,Premium_Amount__c FROM Motor_Insurence__c];
        return moter;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
    
    


    
   

