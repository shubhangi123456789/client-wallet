// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-wallet-component',
//   standalone: true,
//   imports: [],
//   templateUrl: './wallet-component.component.html',
//   styleUrl: './wallet-component.component.css'
// })
// export class WalletComponentComponent {

// }

// src/app/components/booking/booking.component.ts
import { Component } from '@angular/core';
import  { WalletServiceService } from '../wallet-service.service';

@Component({
  selector: 'app-wallet-component',
  templateUrl: './wallet-component.component.html',
  styleUrls: ['./wallet-component.component.css'],
  standalone: true
})
export class WalletComponentComponent {
  clientId: number = 1; // This should be set to the logged-in user's client ID
  data:WalletServiceService;
  constructor(restData: WalletServiceService) {
    this.data=restData;
  }

  bookConsultation() {

    const amountToDeduct = 10.00; // Amount to deduct
    this.data.deductFromWallet(this.clientId, amountToDeduct);
    
  }
}
