import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs';
import { ConnectionStatus, Network } from '@capacitor/network';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{


  networkStatus: ConnectionStatus | undefined
  estado:any;

  ngOnInit() {
    if(Network) {
      Network.getStatus().then((status) => {
        this.networkStatus = status
        this.estado = status.connected;
        console.log(this.networkStatus);
        console.log(this.estado);
      })
    }
    Network.addListener('networkStatusChange',status=>{
      this.networkStatus = status;
      this.estado = status.connected;
      console.log(this.estado)
      
    })
    
  }

  constructor(
    private auth: AuthService,

  ) {}
}
