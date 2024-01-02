import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = {
    Title: 'HELLOW',
    description: 'I am Mohamed Ramadan, Full Stack Developer',
    details: 'Our team provides high quality technical solution services to customers, we can help you complete the project or provide technical support and help you sell your product.',
    IconBlocks:[
      {id:1,icon:'fa-html5',title:'HTML5 &amp; CSS3',description:'provides advanced features and multimedia capabilities'},
      {id:2,icon:'fa-bolt',title:'Easy to Use',description:'provides to display properly on all devices, including desktops, laptops, tablets, and smartphones. This ensures that visitors can easily access your website from any device, and can interact with your content without any issues'},
      {id:3,icon:'fa-tablet',title:'Fully Responsive',description:'make web pages render well on all screen sizes and resolutions while ensuring good usability.'},
      {id:4,icon:'fa-rocket',title:'Parallax Effect',description:' create an illusion of depth and movement by making different elements scroll at different speeds'},

    ]
  }
}
