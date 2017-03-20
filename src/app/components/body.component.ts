import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    show:boolean = true;
    text:string = "Mi ambición ha sido siempre hacer realizables los sueños.";
    author:string = "Bill Gates";


    personajes:string[] = ["Spiderman" , "Thor", "Batman", "Capitan America", "Wolverin"];
}