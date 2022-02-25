
import React from 'react'
import axios from 'axios'
export default class CreditApplicationService{
    getAllCreditApplication(){
        return axios.get("http://localhost:8080/api/creditApplication/all")
      }
  
      getCreditApplicationById(id){
        return axios.get("http://localhost:8080/api/"+id)
      }

      checkCreditApplicationResult(creditApplication){
        return axios.post("http://localhost:8080/api/creditApplication/checkCreditApplicationResult",creditApplication)
    }
 
    checkCreditApplicationStatus(nationalID){
      return axios.get("http://localhost:8080/api/creditApplication/checkCreditApplicationStatus?nationalID="+nationalID)
    }
}
