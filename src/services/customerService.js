import axios from "axios";

export default class CustomerService{

    getAllCustomer(){
      return axios.get("http://localhost:8080/api/customer/all")
    }

    getCustomerById(id){
      return axios.get("http://localhost:8080/api/customer/"+id)
    }
}