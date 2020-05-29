import { Component, OnInit } from '@angular/core';
import { Login } from '../../shared/login/login';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login/login.service';
import swal from 'sweetalert2';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  public log: Login = new Login();

  constructor( private router: Router, private _login: LoginService ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.log);
    if (this.log.user == 'admin' && this.log.password == '123456'){
      sessionStorage.Login = this.log.user.toString();
      //this.router.navigate(['/inicio']);
      window.location.href = `${environment.rutaDashboard}`;
    }else{
      sessionStorage.removeItem('Login');
      swal.fire({
        icon: 'error',
        title: 'Usuario y/o contraseña incorrecta'
      });
    }	
    //sessionStorage.Login = this.log.user.toString();
    //this.router.navigate(['/inicio']);

    /*
    this.subscription = this._login.getLogin(this.log)
      .subscribe((data: any) => {
        if ( data != null) {
          swal.fire({
            icon: 'success',
            title: 'Usuario Logeado',
            text: 'Bienvenido ' + data.user_login,
            timer: 2000
          });
          this.router.navigate(['/inicio']);
        } else{
          swal.fire({
            icon: 'error',
            title: 'Usuario y/o contraseña incorrecta'
          });
        }	
      },
      error => {
        //console.log(error.error.Message);
        swal.fire({
          title: 'ERROR!!!',
          text: error.error.Message,
          icon: 'error'});
      });
      */
    }

}
