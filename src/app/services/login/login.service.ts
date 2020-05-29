import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment,  } from '../../../environments/environment';
import { map } from 'rxjs/operators';
//import { Usuarios } from '../../modules/usuarios/usuarios';
import { Login } from '../../shared/login/login';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

	/*
	  constructor(private http: HttpClient, public router: Router) { }
	  public urlEndPoint = `${environment.rutaAPI}`;
	  getLogin(login: Login): Observable<Login[]> {
		return this.http.post<Usuarios>(this.urlEndPoint + '/Login', login).pipe(
		// return this.http.get("/api/Login/"+matricula).pipe(
          map((response: any) => {
			sessionStorage.Login = login.user.toString();
			// sessionStorage.setItem(_TOKEN, matricula.toString());
            return response;
            })
		);
      }
	
      logout() {
		localStorage.removeItem(_TOKEN);
		// sessionStorage.removeItem(_TOKEN);
		this.router.navigate(['/adminLogin']);
	}

	      estaLogueado() {
		if (localStorage.getItem(_TOKEN) === null) {
		// if (sessionStorage.removeItem(_TOKEN) === null) {
			return false;
		} else {
			return (localStorage.getItem(_TOKEN).length > 5);
			// return (sessionStorage.getItem(_TOKEN).length>5);
		}
	}
	*/
}
