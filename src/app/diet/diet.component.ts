import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

interface Food {
  id: number;
  name: string;
  description: string;
  qttCalories: number;
  qttDaysFeed: number;
  imageLink: string;
}

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [FormsModule, RouterLink, InputTextModule, CardModule],
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
