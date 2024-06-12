import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';

import {UserServis} from '../user-servis';
import {Knjiga_Casopis, Knjiga_CasopisServis} from "../../knjiga_casopis/knjiga_casopis-servis";
import {BrisanjeSnackComponent} from "../../brisanje-snack/brisanje-snack.component";


@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  status!: string;

  koloneZaPrikaz = ["kolona", "kolona2", "kolona4", "kolona5", "kolona3", "kolona6", "kolona9", "kolona11", "kolona8", "kolona7", "kolona10", "kolona12"]

  podaciZaTabelu = new MatTableDataSource<Knjiga_Casopis>;
  maxValue: any;

  constructor(@Inject(MAT_DIALOG_DATA) public podaciZaDijalogKorpe: any, private _snack: MatSnackBar, private servis: UserServis, private servis2: Knjiga_CasopisServis) {
  }

  ngOnInit(): void {
    this.podaciZaTabelu.data = this.podaciZaDijalogKorpe.korpa;


  }

  uklanjanjeIzKorpe(id: number) {
    if (id > -1) {
      this.podaciZaDijalogKorpe.korpa.splice(id, 1);
    }
    this.podaciZaTabelu.data = this.podaciZaDijalogKorpe.korpa;
    console.log(this.podaciZaDijalogKorpe.korpa)
    this._snack.openFromComponent(BrisanjeSnackComponent, {
      duration: 1500
    })

  }

  naruci(id: number) {

    if (this.podaciZaDijalogKorpe.korpa[id].status_narudzbine == "u toku") {
      this.podaciZaDijalogKorpe.korpa[id].status_narudzbine = "pristiglo"
    } else if (this.podaciZaDijalogKorpe.korpa[id].status_narudzbine == "otkazano") {
      this.podaciZaDijalogKorpe.korpa[id].status_narudzbine = "u toku"
    }


  }

  ukupnaCena(): number {
    var ukupnaCena = this.servis.trenutniKorisnik.korpa.reduce((a, b) => a + (b.price * b.quantity!), 0)
    return ukupnaCena
  }

  otkazi(id: number) {
    this.podaciZaDijalogKorpe.korpa[id].status_narudzbine = "cancelled\n"

  }

}
