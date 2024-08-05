import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  links = [
    { id: 1, title: 'Facebook', icon: 'fa fa-facebook fa-1x', href: 'https://www.facebook.com/profile.php?id=100005251680064' },
    { id: 2, title: 'Google+', icon: 'fa fa-google-plus fa-1x', href: 'https://myaccount.google.com/personal-info?hl=en' },
    { id: 3, title: 'Twitter', icon: 'fa fa-twitter', href: 'https://twitter.com/elcessy_m' },
    { id: 4, title: 'Instagram', icon: 'fa fa-instagram fa-1x', href: 'https://www.instagram.com/elceessy546/' },
    { id: 5, title: 'Behance', icon: 'fa fa-behance fa-1x', href: 'https://www.behance.net/mohamedelcessy' },
  ]
  pages = [
    { id: 1, title: 'Home', path: 'home' },
    { id: 2, title: 'about', path: 'about' },
    { id: 3, title: 'gallery', path: 'gallery' },
    { id: 4, title: 'services', path: 'services' },
    { id: 5, title: 'testimonials', path: 'testimonials' },
    { id: 6, title: 'clients', path: 'clients' },
    { id: 6, title: 'pricing', path: 'pricing' },
  ]
}
