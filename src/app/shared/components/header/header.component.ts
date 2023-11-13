import {Component, EventEmitter, HostListener, Output, Renderer2} from '@angular/core';
import {ButtonComponent} from "../controls/button/button.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent
  ]
})
export class HeaderComponent {
  private header!: HTMLElement;
  @Output() isDisplayed = new EventEmitter<boolean>();
  isDisplay = false;

  constructor(private renderer: Renderer2) {
    this.renderer.setAttribute(document.querySelector('html'), 'data-theme', 'cyan')
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 200) {
      this.renderer.addClass(this.header, 'displayed');
      if (this.isDisplay) return
      this.isDisplay = true;
      this.isDisplayed.emit(true)
      //switch to dark theme

    }
      // this.renderer.setAttribute(document.querySelector('html'), 'data-theme', 'cyan')
    if (scrollPosition < 10) {
      this.renderer.removeClass(this.header, 'displayed');
      if (!this.isDisplay) return
      this.isDisplay = false;
      this.isDisplayed.emit(false)
    }
  }

  ngOnInit() {
    this.header = document.getElementById('container') as HTMLElement;
  }
}
