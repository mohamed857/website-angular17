import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  clients=[
    {id:1,src:'./assets/images/company-images/company-logo1.png',name:'tree'},
    {id:2,src:'./assets/images/company-images/company-logo2.png',name:'Fingerprint'},
    {id:3,src:'./assets/images/company-images/company-logo3.png',name:'The Man'},
    {id:4,src:'./assets/images/company-images/company-logo4.png',name:'Mustache'},
    {id:5,src:'./assets/images/company-images/company-logo5.png',name:'Goat'},
    {id:6,src:'./assets/images/company-images/company-logo6.png',name:'Justice'},
    {id:7,src:'./assets/images/company-images/company-logo7.png',name:'Ball'},
    {id:8,src:'./assets/images/company-images/company-logo8.png',name:'ColdJustice'},
    {id:9,src:'./assets/images/company-images/company-logo9.png',name:'Cold'},


  ]
}
