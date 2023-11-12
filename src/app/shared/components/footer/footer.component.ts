import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialNetworks = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/zacharie.abessoloekouma',
      icon: 'fa-brands fa-facebook',
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/channel/UC4QXH3Z0jJ5Z3q0X6Z3Z9jw',
      icon: 'fa-brands fa-youtube',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/zacharie-abessolo-ekouma-2b1b3a1a0/',
      icon: 'fa-brands fa-linkedin',
    },
    {
      name: 'github',
      link: 'https://github.com/Abessolo',
      icon: 'fa-brands fa-github',
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/zacharieabessolo/',
      icon: 'fa-brands fa-instagram',
    }
  ]
}
