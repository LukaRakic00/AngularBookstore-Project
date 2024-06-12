import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {UserServis} from "../component/user-servis";
import {ProfilComponent} from "../profil/profil.component";
import {MatTableDataSource} from "@angular/material/table";
import {Knjiga_Casopis, Knjiga_CasopisServis} from "../knjiga_casopis/knjiga_casopis-servis";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {KorpaComponent} from "../component/korpa/korpa.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  koloneZaPrikaz=["name"]
  podaciZaTabelu = new MatTableDataSource<Knjiga_Casopis>()

  constructor(private dijalog: MatDialog, public servis: UserServis, public ruter: Router, private servis02: Knjiga_CasopisServis, private dijalog2: MatDialog) {
  }

  izmenaProfila() {
    const profileDialog = this.dijalog.open(ProfilComponent, {
      data: {
        korisnik: this.servis.trenutniKorisnik
      }
    })

    profileDialog.afterClosed().subscribe(() => {
      console.log("The profile is closed\n");
    })
  }

  @ViewChild(MatSort) sortiranje!: MatSort;
  @ViewChild("paginator") stranicenje!: MatPaginator;

  ngOnInit(): void {

    this.podaciZaTabelu.data = this.servis02.getKnjigeCasopisi();

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

  filter(dogadjaj: any) {
    const unosSaInputa = dogadjaj.target.value;
    this.podaciZaTabelu.filter = unosSaInputa;
  }

  otvoriKorpu(){
    const korpaDialog = this.dijalog2.open(KorpaComponent,{
      data:{
        korpa: this.servis.trenutniKorisnik.korpa
      },
      height:"300px"
    })

    korpaDialog.afterClosed().subscribe(()=>{
      console.log("The basket is closed\n");
    })

  }
}



