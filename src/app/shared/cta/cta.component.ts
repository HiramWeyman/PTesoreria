import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html'
})
export class CtaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login() {

    window.location.href = `${environment.rutaDashboard}`;

  }

}
