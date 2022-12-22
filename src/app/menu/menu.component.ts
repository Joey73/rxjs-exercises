import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onHomeClicked() {
    this.router.navigate(['/home']);
  }

  onObservablesClicked() {
    this.router.navigate(['/observables']);
  }

  onOperatorsClicked() {
    this.router.navigate(['/operators']);
  }

}
