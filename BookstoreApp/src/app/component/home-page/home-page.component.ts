import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UserServis} from "../user-servis";
import {DodavanjeSnackComponent} from '../../dodavanje-snack/dodavanje-snack.component';
import {Knjiga_Casopis, Knjiga_CasopisServis} from '../../knjiga_casopis/knjiga_casopis-servis';


@Component({
  selector: 'app-pocetna',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  koloneZaPrikaz = ["naziv"]

  podaciZaTabelu = new MatTableDataSource<Knjiga_Casopis>()

  constructor(private servis: Knjiga_CasopisServis, public servis2: UserServis, private _poruka: MatSnackBar) {

  }

  @ViewChild(MatSort) sortiranje!: MatSort;
  @ViewChild("paginator") stranicenje!: MatPaginator;

  ngOnInit(): void {

    this.podaciZaTabelu.data = this.servis.getKnjigeCasopisi();

    this.podaciZaTabelu.filterPredicate = ((artikal, filter) => {
      return artikal.name.toLocaleLowerCase() == filter.toLocaleLowerCase() ||
        artikal.genre.toLocaleLowerCase() == filter.toLocaleLowerCase() ||
        artikal.userReview?.toLocaleLowerCase() == filter.toLocaleLowerCase();
    })
  }

  ngAfterViewInit(): void {
    this.podaciZaTabelu.sort = this.sortiranje;
    this.podaciZaTabelu.paginator = this.stranicenje;

  }

  dodavanjeUKorpu(id: number) {

    let a = this.servis2.trenutniKorisnik.korpa.find(artikalK => artikalK.id === id);

    if (a === undefined) {
      this.servis.getKnjigeCasopisi()[id].rating = 0;
      this.servis.getKnjigeCasopisi()[id].status_narudzbine = "u toku";
      this.servis.getKnjigeCasopisi()[id].quantity = 1;
      this.servis2.trenutniKorisnik.korpa.push(this.servis.getKnjigeCasopisi()[id]);

    } else if (this.servis.getKnjigeCasopisi()[id].status_narudzbine == "otkazano" || this.servis.getKnjigeCasopisi()[id].status_narudzbine == "u toku") {

      {
        this.servis.getKnjigeCasopisi()[id].quantity!++;

      }
    }

    this._poruka.openFromComponent(DodavanjeSnackComponent, {
      duration: 1500
    })


    console.log(this.servis2.trenutniKorisnik.korpa);
  }


}
