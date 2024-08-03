import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router) { }

  navigateToCalls() {
    this.router.navigate(['/crms/calls']);
  }
  navigateToDashboard() {
    this.router.navigate(['/crms/dashboard']);
  }

}
  