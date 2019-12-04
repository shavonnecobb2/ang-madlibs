import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  foodItem: string;
  petName: string;
  cityName: string;
  countryName: string;
  display: boolean = false;

  title = 'madlibs';


  save() {
    if (this.foodItem && this.color && this.petName
      && this.cityName && this.countryName) {
        this.display = true;
      }
      else {
        alert("Please fill out the forms completely!");
      }
    // console.log(this.foodItem && this.color && this.petName
    // && this.cityName && this.countryName);
  }

  reset() {
    this.foodItem = '';
    this.color = '';
    this.petName = '';
    this.cityName = '';
    this.countryName = '';
    this.display = false;
  }
}
