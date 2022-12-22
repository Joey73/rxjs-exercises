import { Component } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {

  constructor(private exerciseService: ExerciseService) { }

  onInitObservableButtonClicked() {
    this.exerciseService.initDataObservable();
  }

  onInitSubjectButtonClicked() {

  }

}
