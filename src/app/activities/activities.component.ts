import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    FloatLabelModule,
    InputNumberModule,
    CardModule,
    FormsModule,
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent {
  optActivities: string[] = ['Caminhada', 'Corrida', 'Ciclismo', 'Natação'];
  activitiesListRender: any = [];

  activitiesForm = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    date: new FormControl<Date | null>(null, Validators.required),
    distance: new FormControl<number | null>(null),
    duration: new FormControl<number | null>(null),
  });

  ngOnInit(): void {
    this.updateRenderList();
  }

  submitForm() {
    if (this.activitiesForm.valid) {
      console.log(this.activitiesForm.value);
      const activitiesListString = localStorage.getItem('activitiesList');
      const activitiesList = !!activitiesListString
        ? JSON.parse(activitiesListString)
        : [];

      const selectedDate: Date | null =
        this.activitiesForm.get('date')?.value ?? null;
      let formattedDate: string = '';
      if (selectedDate instanceof Date && !isNaN(selectedDate.getTime())) {
        const dia = selectedDate.getDate().toString().padStart(2, '0');
        const mes = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
        const ano = selectedDate.getFullYear();
        formattedDate = `${dia}/${mes}/${ano}`;
      } else {
        console.error('Data inválida.');
      }

      activitiesList.push({
        name: this.activitiesForm.get('name')?.value,
        date: formattedDate,
        distance: this.activitiesForm.get('distance')?.value,
        duration: this.activitiesForm.get('duration')?.value,
      });
      localStorage.setItem('activitiesList', JSON.stringify(activitiesList));
      this.dialogVisible = false;
      this.activitiesForm.reset();
      this.updateRenderList();
    }
  }

  deleteActivity(index: number) {
    console.log(index);
    const activitiesListString = localStorage.getItem('activitiesList');
    const tempActivitiesList = !!activitiesListString
      ? JSON.parse(activitiesListString)
      : [];
    if (index >= 0 && index < tempActivitiesList.length) {
      tempActivitiesList.splice(index, 1);

      localStorage.setItem(
        'activitiesList',
        JSON.stringify(tempActivitiesList)
      );
      this.updateRenderList();
    } else {
      console.error('Invalid index');
    }
  }

  cleanActivities() {
    localStorage.removeItem('activitiesList');
    this.updateRenderList();
  }

  // dialog
  dialogVisible: boolean = false;
  showDialog() {
    this.dialogVisible = true;
  }
  updateRenderList() {
    const activitiesListString = localStorage.getItem('activitiesList');
    this.activitiesListRender = !!activitiesListString
      ? JSON.parse(activitiesListString)
      : [];
    this.activitiesListRender.forEach(
      (item: { name: string; img?: string }) => {
        switch (item.name) {
          case 'Caminhada':
            item.img =
              'https://placehold.co/150x150/3B82F6/white?text=caminhada';
            break;
          case 'Corrida':
            item.img = 'https://placehold.co/150x150/3B82F6/white?text=corrida';
            break;
          case 'Ciclismo':
            item.img =
              'https://placehold.co/150x150/3B82F6/white?text=ciclismo';
            break;
          case 'Natação':
            item.img = 'https://placehold.co/150x150/3B82F6/white?text=natação';
            break;
          default:
            break;
        }
      }
    );
    console.log('render: ', this.activitiesListRender);
  }
}
