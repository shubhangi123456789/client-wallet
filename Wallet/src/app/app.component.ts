import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WalletComponentComponent } from "../wallet-component/wallet-component.component";
import { ClientComponent } from "../client/client.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WalletComponentComponent, ClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WalletC';
}
