import {Injectable} from "@angular/core";
import {UserServis} from "../component/user-servis";

export interface Knjiga_Casopis {
  id: number;
  name: string;
  genre: string;
  numberOfPages: number;
  publisherName: string;
  releaseDate: Date;
  price: number;
  status_narudzbine?: "pristiglo" | "u toku" | "otkazano";
  rating?: number;
  userReview?: string;
  imgPath: string;
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class Knjiga_CasopisServis {
  private knjige_casopisi: Knjiga_Casopis[] = [
    {
      id: 0,
      name: "The Lord of the Rings: The Two Towers",
      genre: "Science fiction",
      numberOfPages: 1178,
      publisherName: "Del Rey",
      releaseDate: new Date("2012-09-25"),
      price: 3000,

      userReview: "The Lord of the Rings trilogy is one of the biggest trilogies of all time. Its first volume, like the other two, has earned a colossal success as what it genuinely deserves. It has been nominated as well as acquired numerous sets of awards – proof of its extraordinaire quality, one can say. Nonetheless, it is indeed worth watching, for it is a one-in-a-million obra maestra. ",
      imgPath: "assets/slike/slika1.jpg"
    },
    {
      id: 1,
      name: "Harry Potter and the Order of the Phoenix",
      genre: "Fantasy",
      numberOfPages: 870,
      publisherName: "Bloomsbury",
      releaseDate: new Date("2003-06-21"),
      price: 2500,

      userReview: "This is my favourite Harry Potter book and my favourite movie that followed, the amazing writing skills displayed by J.K Rowling, the classic personality of Harry, Ron, Hermione, and characters from the Order of the Phoenix, the addition of Luna, the toad known as Dolores Umbridge, the new Defence against the Dark Arts teacher, and more amazing characters.",
      imgPath: "assets/slike/slika2.jpg"

    },
    {
      id: 2,
      name: "It Starts with Us",
      genre: "Romance",
      numberOfPages: 336,
      publisherName: "Vulkan",
      releaseDate: new Date("2022-08-18"),
      price: 1500,

      userReview: "I really love the story line of the book and when you read the book and understand the meaning of the book title it will make you feel really happy, the book ending is what really the couple deserved. A really amazing book by the great writer Colleen Hoover and would recommend everyone to read specially to those who have read In Ends with Us, like you need this book in your life! ",
      imgPath: "assets/slike/slika3.jpg"
    },
    {
      id: 3,
      name: "The Man Who Died Twice",
      genre: "Crime and mystery",
      numberOfPages: 464,
      publisherName: "Viking Press",
      releaseDate: new Date("2022-09-16"),
      price: 1099,

      userReview: "The Man Who Died Twice is a crime novel written by the British comedian and presenter Richard Osman. It was published by Penguin Random House's Viking Press in September 2021 and is the sequel to The Thursday Murder Club.",
      imgPath: "assets/slike/slika4.jpg"
    },
    {
      id: 4,
      name: "Bossypants",
      genre: "Humor, Autobiography, Biography",
      numberOfPages: 277,
      publisherName: "Little, Brown and Company",
      releaseDate: new Date("2011-04-05"),
      price: 899,

      userReview: "Bossypants is an autobiographical comedy book written by the American comedian Tina Fey. The book topped The New York Times Best Seller list, and stayed there for five weeks upon its release. As of November 2014, the book has sold over 2.5 million copies since its debut, according to Nielsen BookScan.",
      imgPath: "assets/slike/slika5.jpg"

    },
    {
      id: 5,
      name: "Revival (novel)",
      genre: "Horror",
      numberOfPages: 405,
      publisherName: "Scribner",
      releaseDate: new Date("2014-08-11"),
      price: 2599,

      userReview: "Revival by King had left a deep rooted impression on me although it’s been quite a few days since I’ve read it. You start from the first chapter where you meet Jamie Morton (protagonist) and how he meets his fifth business Rev.",
      imgPath: "assets/slike/slika6.jpg"
    },
    {
      id: 6,
      name: "Dracula",
      genre: "Horror",
      numberOfPages: 418,
      publisherName: "Archibald Constable and Company (UK)",
      releaseDate: new Date("1897-05-26"),
      price: 1899,

      userReview: "What a wild ride it is reading this book!\n" +
        "At first glance you are met with the beautiful in its own right and highly sophisticated language in which this masterpiece was written, holding within its, what you would think is just other shallow and vague attempt to scare you, such deep meaning and a villain who will knows he is a monster, but he embraces it.",
      imgPath: "assets/slike/slika7.jpg"
    },
    {
      id: 7,
      name: "Robin",
      genre: "Comedy, Biography",
      numberOfPages: 365,
      publisherName: "Henry Holt and Co.",
      releaseDate: new Date("2018-06-15"),
      price: 1599,

      userReview: "This well-written page-turner is the definitive biography of the genius of Robin Williams, whose life redefines the highs and lows of the American dream",
      imgPath: "assets/slike/slika8.jpg"
    },
    {
      id: 8,
      name: "Michael Connelly",
      genre: "Crime and mystery",
      numberOfPages: 267,
      publisherName: "Grand Central Publishing",
      releaseDate: new Date("2003-03-01"),
      price: 1299,
      quantity: 2,
      userReview: "This anthology, in which members of the International Thriller Writers society double up on 11 short mysteries featuring their famous protagonists in tandem, is both gimmicky and intriguing—and surprisingly testosterone-soaked. All but two of the..",
      imgPath: "assets/slike/slika10.jpg"
    },
    {
      id: 9,
      name: "Love on the Brain",
      genre: "Romance",
      numberOfPages: 289,
      publisherName: "Penguin Random House",
      releaseDate: new Date("2022-08-23"),
      price: 2299,

      userReview: "Its good the puns the hooking if the book you want to read it until you're done with the book the way writer spoke about the injustice in real life for the women community in STEM is awakening. Love Levi and love how funny Bee is both stole my heart Rocio is my dream daughter. Bee's sister had a good role in the story and it was a good read.",
      imgPath: "assets/slike/slika9.jpg"
    }

  ]

  constructor(private servis: UserServis) {
  }


  getKnjigeCasopisi() {
    return this.knjige_casopisi;
  }


}
