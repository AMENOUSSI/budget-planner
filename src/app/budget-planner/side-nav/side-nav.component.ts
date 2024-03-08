import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  isSlideOut = true;
  

  toggleSideOut(): void {
    this.isSlideOut = !this.toggleSideOut;
  }

  onLogout() {
    throw new Error('Method not implemented.');
    }
  onHistory() {
    throw new Error('Method not implemented.');
    }
  onProfile() {
    throw new Error('Method not implemented.');
    }
  onDash() {
    throw new Error('Method not implemented.');
    }
}
