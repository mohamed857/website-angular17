import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
feedbacks=[
  {id:1,src:'./assets/images/user-images/ghareb.enc',opinion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlaboreet dolore magna aliqua',name:'Ghareeb sayed - Happy Customer'},
  {id:1,src:'./assets/images/user-images/zain.jpg',opinion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlaboreet dolore magna aliqua',name:'Mohamed Zain - Happy Customer'},
  {id:1,src:'./assets/images/user-images/walid.jpg',opinion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlaboreet dolore magna aliqua',name:'Walid Mohamed - Happy Customer'},

]
}
