import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from '../component/user-servis';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{


  daLiSeImeEdituje = false;
  daLiJeImeIspravno!:boolean;


  daLiSePrezimeEdituje = false;
  daLiJePrezimeIspravno!:boolean;


  daLiSeTelefonEdituje = false;
  daLiJeTelefonIspravan!:boolean;

  daLiSeAdresaEdituje=false;
  daLiJeAdresaIspravna!:boolean;

  daLiSeEditujeMail = false;
  daLiJeMailIspravan!: boolean;
  daLiMailVecPostoji!: boolean;


  daLiSePasswordEdituje = false;
  daLiJePasswordIspravan!: boolean;

  daLiSeDatumEdituje = false;

  korisnikZaEditovanje!:User;
  constructor( @Inject(MAT_DIALOG_DATA) public podaciZaDijalog: any) {

  }


  ngOnInit(): void {
    this.korisnikZaEditovanje= {
      id:this.podaciZaDijalog.korisnik.id,
      name:this.podaciZaDijalog.korisnik.name,
      surname:this.podaciZaDijalog.korisnik.surname,
      phone:this.podaciZaDijalog.korisnik.phone,
      address:this.podaciZaDijalog.korisnik.address,
      email: this.podaciZaDijalog.korisnik.email,
      password: this.podaciZaDijalog.korisnik.password,
      date: this.podaciZaDijalog.korisnik.date,
      korpa:[]
    }
  }
  potvrdiMail(forma: NgForm) {


   if (forma.invalid) {
    console.log("Error!");
    this.daLiJeMailIspravan = false;
  } else {
    this.podaciZaDijalog.korisnik.email = this.korisnikZaEditovanje.email;
    console.log("successfully changed email\n");
    this.daLiJeMailIspravan = true;
    setTimeout(() => {
      this.daLiJeMailIspravan = false;
    }, 1500);
  }

  }

  potvrdiPassword(forma: NgForm) {
    if (forma.invalid) {
      console.log("Error!");
      this.daLiJePasswordIspravan = false;
    } else {
      this.podaciZaDijalog.korisnik.password = this.korisnikZaEditovanje.password;
      console.log("successfully changed password\n");
      this.daLiJePasswordIspravan = true;
      setTimeout(() => {
        this.daLiJePasswordIspravan = false;
      }, 1500);
    }
  }

  potvrdiDatum(forma: NgForm) {
    if (forma.invalid) {
      console.log("Error!");
    } else {
      this.podaciZaDijalog.korisnik.date = this.korisnikZaEditovanje.date;
      this.daLiSeDatumEdituje = !this.daLiSeDatumEdituje;
    }


  }

  potvrdiIme(forma:NgForm){
    if (forma.invalid) {
      console.log("Error!");
      this.daLiJeImeIspravno = false;
    } else {
      this.podaciZaDijalog.korisnik.name = this.korisnikZaEditovanje.name;
      console.log("you have successfully replaced the name\n!");
      this.daLiJeImeIspravno = true;
      setTimeout(() => {
        this.daLiJeImeIspravno= false;
      }, 1500);
    }
  }

potvrdiPrezime(forma:NgForm){
  if (forma.invalid) {
    console.log("Error!");
    this.daLiJePrezimeIspravno = false;
  } else {
    this.podaciZaDijalog.korisnik.surname = this.korisnikZaEditovanje.surname;
    console.log("you have successfully replaced the surname\n!");
    this.daLiJePrezimeIspravno = true;
    setTimeout(() => {
      this.daLiJePrezimeIspravno= false;
    }, 1500);
  }
}


potvrdiTelefon(forma:NgForm){
  if (forma.invalid) {
    console.log("Error!");
    this.daLiJeTelefonIspravan = false;
  } else {
    this.podaciZaDijalog.korisnik.telefon = this.korisnikZaEditovanje.phone;
    console.log("you have successfully replaced the phone\n");
    this.daLiJeTelefonIspravan = true;
    setTimeout(() => {
      this.daLiJeTelefonIspravan= false;
    }, 1500);
  }
}

potvrdiAdresu(forma:NgForm){
  if (forma.invalid) {
    console.log("Error!");
    this.daLiJeAdresaIspravna = false;
  } else {
    this.podaciZaDijalog.korisnik.address = this.korisnikZaEditovanje.address;
    console.log("Successfully changed address\n");
    this.daLiJeAdresaIspravna = true;
    setTimeout(() => {
      this.daLiJeAdresaIspravna= false;
    }, 1500);
  }
}
}
