import { Component } from '@angular/core';
import { Food } from '../interfaces/food';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss',
})
export class DietComponent {
  searchInput = '';
  foodList!: Food[];
  showedFoodList!: Food[];
  ngOnInit(): void {
    const foodString = localStorage.getItem('foodList');
    if (!!foodString) {
      this.foodList = JSON.parse(foodString);
      this.showedFoodList = this.foodList;
    } else {
      alert('Não há alimentos cadastrados!');
    }
  }
  searchFood() {
    console.log(this.searchInput);
    if (!this.searchInput) {
      this.showedFoodList = this.foodList;
    } else {
      this.showedFoodList = this.foodList.filter((item) =>
        item.name.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    }
  }
}
