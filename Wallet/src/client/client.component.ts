import { Component } from '@angular/core';
import { WalletComponentComponent } from '../wallet-component/wallet-component.component';
import { WalletServiceService } from '../wallet-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [NgFor],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  restData:WalletServiceService;
  userdata:any;
  clientId: number = 1; // This should be set to the logged-in user's client ID
  selectedConsultantId:any;
 // restData:WalletServiceService;
  constructor(restDataref:WalletServiceService)
  {
    this.restData=restDataref;
  }
  
  // constructor(restData: WalletServiceService) {
  //   this.data=restData;
  // }

  bookConsultation() {

    const amountToDeduct = 10.00; // Amount to deduct

    this.restData.deductFromWallet(this.clientId, amountToDeduct);
    
  }
  handleAction(consultantId: number) {
    // Store the consultant ID in a variable
    this.selectedConsultantId = consultantId;

    // Example calls (adjust as needed)
    this.restData.deductFromWallet(this.clientId, 10);
    this.restData.updateAppointments(this.selectedConsultantId,this.clientId);
}

}
