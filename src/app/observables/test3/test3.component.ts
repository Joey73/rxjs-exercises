import { Component } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component {
  observableResultArray: Array<number> = [];
  subjectResultArray: Array<number> = [];

  constructor(private exerciseService: ExerciseService) { }

  onSubscribeToObservableButtonClicked() {
    this.exerciseService.getExampleDataViaObservable()?.subscribe({
      next: data => {
        this.observableResultArray.unshift(data);
      }
    });
  }

  onSubscribeToSubjectButtonClicked() {
    console.log('onSubscribeToSubjectButtonClicked()');
    this.exerciseService.getExampleDataViaSubject()?.subscribe({
      next: data => {
        console.log('onSubscribeToSubjectButtonClicked() - data: ', data);
        this.subjectResultArray.unshift(data);
      }
    });
  }

}
