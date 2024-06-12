
import { Injectable, OnInit } from "@angular/core";
import { Knjiga_Casopis } from "../knjiga_casopis/knjiga_casopis-servis";

export interface User {
    id: number;
    name:string;
    surname:string;
    phone:string;
    address:string;
    email: string;
    password: string;
    date: Date;
    korpa: Knjiga_Casopis[];

}

@Injectable({
    providedIn: 'root'
})
export class UserServis implements OnInit {

    trenutniKorisnik!: User;
    sesija = false;

    static bazaKorisnika: User[] = [
        {
            id: 1,
            name:"Luka",
            surname:"Rakic",
            phone:"063000000",
            address:"Uzicke republike 175",
            email: 'luka.rakic.20@singimail.rs',
            password: 'luka1234',
            date: new Date("2000-9-27 12:00"),
            korpa: []

        },
        {
            id: 2,
            name:"Petar",
            surname:"Petrovic",
            phone:"064000000",
            address:"Petra Petrovica 15",
            email: 'ppetrovic@gmail.com',
            password: 'pero1234',
            date: new Date("2001-11-24 13:00"),
            korpa: []
        },

        {
            id: 3,
            name:"Ognjen",
            surname:"Ognjenovic",
            phone:"065000000",
            address:"Bulevar kralja Aleksandra 78",
            email: 'oognjenovic@gmail.com',
            password: 'ognjen1234',
            date: new Date("2002-11-12 15:00"),
            korpa: []
        }
    ]



    constructor() {

    }


    ngOnInit(): void {


    }

    getUserById(id: number): User {
        return UserServis.bazaKorisnika.find(korisnik =>
            korisnik.id == id
        )!
    }

    getUser(email: string): User {
        this.trenutniKorisnik = UserServis.bazaKorisnika.find(korisnik =>

            korisnik.email == email
        )!

        return this.trenutniKorisnik;
    }

    passwordCheck(email: string, password: string): User {

        return UserServis.bazaKorisnika.find(korisnik =>
            (korisnik.email == email && korisnik.password == password)
        )!



    }

    registerUser(email: string, password: string, date: Date,  name:string, surname:string,phone:string,address:string): User {
        var maxID: number = 0;
        var id: number;
        UserServis.bazaKorisnika.forEach(korisnik => {
            if (maxID < korisnik.id) {
                maxID = korisnik.id;
            }
        })
        maxID++;
        id = maxID;

        var korisnik: User = {
            id: id,

            name:name,
            surname:surname,
            phone:phone,
            address : address,
            email: email,
            password: password,
            date: date,
            korpa: []
        }

        UserServis.bazaKorisnika.push(korisnik);

        this.trenutniKorisnik = korisnik;
        return this.trenutniKorisnik;
    }




}
