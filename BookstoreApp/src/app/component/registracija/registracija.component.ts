import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserServis } from '../user-servis';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent {

  tekstGreske="";
  daLiGreskaPostoji!:boolean;

  constructor(private servis:UserServis, private ruter:Router){}

  onSubmit(forma:NgForm){
      console.log(forma.value)
      var name = forma.value.name;
      var surname = forma.value.prezime;
      var phone = forma.value.phone;
      var address = forma.value.address;
      var email = forma.value.email;
      var password = forma.value.password;
      var dateOfBirth = forma.value.dateOfBirth;

      if(this.servis.getUser(email)==undefined){
          this.daLiGreskaPostoji=false;
          this.servis.sesija = true;
          this.servis.registerUser(email,password,dateOfBirth,name,surname,phone,address);
          this.ruter.navigate(['']);
      }else{
        this.daLiGreskaPostoji = true;
        this.servis.sesija = false;
        this.tekstGreske="A user with that email address already exists!";
      }


  }


}
