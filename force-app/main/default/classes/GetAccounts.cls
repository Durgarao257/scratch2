public with sharing class GetAccounts {
    @AuraEnabled(cacheable=true)
    public static List<Account> AccountData() {
     return [SELECT Name,AccountNumber,Site FROM Account];
    }
    }
