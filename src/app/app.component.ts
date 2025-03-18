import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Constant } from './core/constant/Constant';
import { ConstReadPipe } from './shared/pipes/const-read.pipe';
import { OrderStatus } from './core/enum/Enum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ConstReadPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  orderObj:any={
    status:''
  }

  constructor(){
    this.orderObj.status=OrderStatus.Delivered
  }

}
