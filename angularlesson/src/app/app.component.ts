import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Daniel Amador";
  age: number = 14;
  birthday: string = "27/9/06";
  gender: string = "Male";
  Ethnicity: string ="Mexican";
  myFavoriteThing = "";
  title = 'angularlesson';
  hobs = ["Like to ride my bicycle", "I like technology and computers", "I like to play videogames but only on phone :(", "I LOVE Linux! (I use Arch btw :) )", "I like listening to music and my favorite genre is rock and metal!", "I like to play guitar"];
}

let me = {
  name: "Daniel Amador",
  age: 14,
  birthday: "27/9/06",
  gender: "Male",
  Ethnicity: "Mexican",
} 