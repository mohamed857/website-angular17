import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links = [
    { id: 1, title: 'Facebook', icon: 'fa fa-facebook fa-1x', href: 'https://www.facebook.com/profile.php?id=100005251680064' },
    { id: 2, title: 'Google+', icon: 'fa fa-google-plus fa-1x', href: 'https://myaccount.google.com/personal-info?hl=en' },
    { id: 3, title: 'Twitter', icon: 'fa fa-twitter', href: 'https://twitter.com/elcessy_m' },
    { id: 4, title: 'Instagram', icon: 'fa fa-instagram fa-1x', href: 'https://www.instagram.com/elceessy546/' },
    { id: 5, title: 'Behance', icon: 'fa fa-behance fa-1x', href: 'https://www.behance.net/mohamedelcessy' },
    { id: 0, title: '', icon: '', href: '' },
  ]
}
