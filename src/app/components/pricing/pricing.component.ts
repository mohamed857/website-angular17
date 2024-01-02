import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricing = [
    { id: 1, type: 'Personal', about: 'The standard version', price: 19, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    items: [{id:1,title: '5 Downloads'}, {id:2,title: '2 Extensions'}, {id:3,title: 'Tutorials'}, {id:4,title: 'Forum Support'}, {id:5,title: '1 year free updates'}] },
    
    { id: 2, type: 'Student', about: 'Most popular choice', price: 29, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    items: [{id:1,title: '15 Downloads'}, {id:2,title: '5 Extensions'}, {id:3,title: 'Tutorials with Files'}, {id:4,title: 'Forum Support'}, {id:5,title: '2 year free updates'}] },
    
    { id: 3, type: 'Business', about: 'For the whole team', price: 49, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    items: [{id:1,title: 'Unlimited Downloads'}, {id:2,title: 'Unlimited Extensions'}, {id:3,title: 'HD Video Tutorials'}, {id:4,title: 'Chat Support'}, {id:5,title: 'Lifetime free updates'}] },
    

  ]
}
