import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'KeepHealth';
  fakeFoodData = [
    {
      id: 1,
      name: 'Abacate',
      description:
        'Fruta versátil, rica em gorduras saudáveis e nutrientes essenciais.',
      qttCalories: 160,
      qttDaysFeed: 3,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=abacate',
    },
    {
      id: 2,
      name: 'Banana',
      description:
        'Fruta rica em potássio, que ajuda na saúde dos músculos e do coração.',
      qttCalories: 105,
      qttDaysFeed: 2,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=banana',
    },
    {
      id: 3,
      name: 'Maçã',
      description: 'Muito popular, rica em fibras e antioxidantes.',
      qttCalories: 95,
      qttDaysFeed: 1,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=maçã',
    },
    {
      id: 4,
      name: 'Cenoura',
      description:
        'Vegetal rico em betacaroteno, importante para a saúde da visão.',
      qttCalories: 25,
      qttDaysFeed: 2,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=cenoura',
    },
    {
      id: 5,
      name: 'Ovo',
      description:
        'Excelente fonte de proteína e contém muitos nutrientes essenciais.',
      qttCalories: 70,
      qttDaysFeed: 4,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=ovo',
    },
    {
      id: 6,
      name: 'Salmão',
      description:
        'Peixe rico em ácidos graxos ômega-3, benéficos para a saúde cardiovascular.',
      qttCalories: 220,
      qttDaysFeed: 2,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=salmão',
    },
    {
      id: 7,
      name: 'Brócolis',
      description:
        'Vegetal rico em vitaminas e minerais, além de ser uma boa fonte de fibras.',
      qttCalories: 50,
      qttDaysFeed: 2,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=brócolis',
    },
    {
      id: 8,
      name: 'Quinoa',
      description:
        'Grão rico em proteínas e fibras, sendo uma excelente opção para uma dieta equilibrada.',
      qttCalories: 120,
      qttDaysFeed: 3,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=quinoa',
    },
    {
      id: 9,
      name: 'Iogurte',
      description:
        'Fonte de cálcio e probióticos, benéficos para a saúde intestinal.',
      qttCalories: 150,
      qttDaysFeed: 2,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=iogurte',
    },
    {
      id: 10,
      name: 'Nozes',
      description:
        'Oleaginosas ricas em ácidos graxos insaturados e antioxidantes.',
      qttCalories: 185,
      qttDaysFeed: 1,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=nozes',
    },
    {
      id: 11,
      name: 'Abacaxi',
      description: 'Fruta tropical deliciosa, rica em vitamina C e bromelina.',
      qttCalories: 50,
      qttDaysFeed: 2,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=abacaxi',
    },
    {
      id: 12,
      name: 'Kiwi',
      description: 'Fruta exótica e refrescante, cheia de vitamina C e fibras.',
      qttCalories: 45,
      qttDaysFeed: 1,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=kiwi',
    },
    {
      id: 13,
      name: 'Pera',
      description:
        'Suculenta, rica em fibras e uma variedade de vitaminas e minerais.',
      qttCalories: 100,
      qttDaysFeed: 1,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=pera',
    },
    {
      id: 14,
      name: 'Pêssego',
      description: 'Doce e refrescante, rico em vitaminas A e C.',
      qttCalories: 60,
      qttDaysFeed: 1,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=pêssego',
    },
    {
      id: 15,
      name: 'Melancia',
      description:
        'Hidratante, com alto teor de água e nutrientes importantes.',
      qttCalories: 30,
      qttDaysFeed: 1,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=melancia',
    },
    {
      id: 16,
      name: 'Morango',
      description: 'Deliciosa, rica em vitamina C e antioxidantes.',
      qttCalories: 45,
      qttDaysFeed: 1,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=morango',
    },
    {
      id: 17,
      name: 'Tomate',
      description: 'Versátil e nutritivo, rico em licopeno e vitaminas A e C.',
      qttCalories: 20,
      qttDaysFeed: 1,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=tomate',
    },
    {
      id: 18,
      name: 'Batata',
      description:
        'Vegetal versátil, rico em amido e uma boa fonte de energia.',
      qttCalories: 110,
      qttDaysFeed: 2,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=batata',
    },
    {
      id: 19,
      name: 'Abóbora',
      description: 'Vegetal nutritivo, rico em vitamina A e antioxidantes.',
      qttCalories: 30,
      qttDaysFeed: 2,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=abóbora',
    },
    {
      id: 20,
      name: 'Espinafre',
      description:
        'Folha verde escura, repleta de nutrientes como ferro, cálcio e vitaminas A e K.',
      qttCalories: 10,
      qttDaysFeed: 1,
      imageLink: 'https://placehold.co/150x150/3B82F6/white?text=espinafre',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.setItem('foodList', JSON.stringify(this.fakeFoodData));
  }

  showHeadSidebar(): boolean {
    // console.log(this.router.url);
    return this.router.url != '/login' && this.router.url != '/register';
  }
}
