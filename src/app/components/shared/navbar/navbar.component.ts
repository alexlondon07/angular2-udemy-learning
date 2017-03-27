import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  searchHeroe(texto: string) {
    try {
     // console.log(texto);
     this._router.navigate(['buscador', texto]);
    } catch (error) {
      console.log(error);
    }
  }

}
