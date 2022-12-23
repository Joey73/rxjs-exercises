import { Component } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
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
