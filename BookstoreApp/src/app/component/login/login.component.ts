import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServis } from '../user-servis';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  tekstGreske="";
  daLiGreskaPostoji=false;
  constructor( private servis:UserServis, private ruter:Router){}

  onSubmit(forma:NgForm){
    console.log(forma.value)

    var email = forma.value.email;
    var password = forma.value.password;

    var daLijeKorisnikRegistrovan = this.servis.getUser(email);

    if(daLijeKorisnikRegistrovan == undefined){
      this.daLiGreskaPostoji = true;
      this.tekstGreske="User " + email + " not registered\n!";
      this.servis.sesija = false;
      return;
    }

    var daLiJeSifraValidna =this.servis.passwordCheck(email,password);

    if(daLiJeSifraValidna == undefined){
      this.daLiGreskaPostoji = true;
      this.tekstGreske = "Your password is incorrect\ny!"
      this.servis.sesija = false;
      return;
    }

    this.daLiGreskaPostoji = false;
    this.servis.sesija=true;

    this.ruter.navigate(['']);
  }
}
