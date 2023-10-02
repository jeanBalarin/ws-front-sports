import { Component } from '@angular/core';
import {  Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AppName:string = 'Sports 2020'
  constructor(private router:Router) {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: ()=> this.router.navigate(['home'])},
    { label: 'Customer', action: ()=> this.router.navigate(['customer'])}
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
