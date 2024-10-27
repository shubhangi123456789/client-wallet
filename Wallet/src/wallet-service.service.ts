import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WalletServiceService {
  dataFromApi:any;
  appointmentInfo:any;
  _http: HttpClient;
  clid=1;
  bookingdata:any;
  // private apiUrl = 'https://consultantwebapiazure.azurewebsites.net/api/clients'; // Update with your API URL
  
  constructor(_httpRef: HttpClient) {
    this._http=_httpRef;
  }
  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  deductFromWallet(clientId: number, amount: number){
    //id over here is 
    const clientid = 1;
      this._http.get(`https://consultantwebapiazure.azurewebsites.net/api/clients/${clientid}`)
      .subscribe((data) => {
        this.dataFromApi = data;
        console.log("hi",this.dataFromApi.walletBalance);
        this.dataFromApi.walletBalance=this.dataFromApi.walletBalance-amount;
        console.log("ok",this.dataFromApi.walletBalance);
      });
      
      console.log('trying to post');
      
      
    this._http.put('https://consultantwebapiazure.azurewebsites.net/api/Clients/updateWallet/1',
    JSON.stringify({newBalance: this.dataFromApi.walletBalance}),this.httpOptions) .subscribe(res =>{console.log(res)});
  }   
  
    
  updateAppointments(consultantid:number,clid:number){
    console.log("hi");
    // this._http.get(`https://consultantwebapiazure.azurewebsites.net/api/clients/${this.clid}`)
    //   .subscribe((data) => {
    //     this.appointmentInfo = data;
    //     console.log(this.appointmentInfo);
    //     console.log("Inside Get");
    //   });
      
      const dataVal={
        // clientId: this.appointmentInfo.clientId,
        consultantId:consultantid,
        clientId:1,
        scheduledTime: "2024-10-21T10:00:00"
        
      }
      console.log("this is the dataVal:",dataVal);
      
      this._http.post("https://consultantwebapiazure.azurewebsites.net/api/Appointments",dataVal,this.httpOptions)
      .subscribe(response => {
        console.log(dataVal);
        console.log("Inside Post");
        console.log('Data updated', response);
        alert("Data updated");
      }, error => {
        console.error('Error updating data', error);
            alert("Error updating data");
          });
    }
        getConsultantDetails()
        {
          this._http.get("https://consultantwebapiazure.azurewebsites.net/api/Consultants")
          .subscribe((data)=>{  
            this.bookingdata=data;
          })
        }
        

        
        // console.log(this.dataFromApi.walletBalance);
        
        // return this.http.patch(`${this.apiUrl}/${clientId}/deduct`, { amount });
      //   this._http.post("https://consultantwebapiazure.azurewebsites.net/api/clients/1",{ walletBalance: this.dataFromApi.walletBalance })
      //       .subscribe(response => {
      //         console.log(this.dataFromApi.walletBalance);
      //         console.log('Data added',response);
      //         alert("Data added");
      //      })
      // }
      
      // import { Injectable } from '@angular/core';
      
      // @Injectable({
      //   providedIn: 'root'
      // })
      // export class WalletServiceService {
      
      //   constructor() { }
      // }
      
      // src/app/services/client.service.ts
      // getConsultantById(id: number) {
        //   this._http.get('https://consultantwebapiazure.azurewebsites.net/api/consultants/${id}')
        //     .subscribe((data) => {
          //       this.dataFromApi = data;
          //     });
  // }
}
