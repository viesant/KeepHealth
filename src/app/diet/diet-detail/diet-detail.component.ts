import { Component } from '@angular/core';
import { Food } from '../../interfaces/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diet-detail',
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.scss',
})
export class DietDetailComponent {
  detailFood!: Food;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const foodString = localStorage.getItem('foodList');
      if (!!foodString) {
        let foodList = JSON.parse(foodString);
        this.detailFood = foodList.find((food: { id: number }) => {
          return food.id == params['id'];
        });
      }
    });
    // console.log(this.detailFood);
  }
}
