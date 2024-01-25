import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component  implements OnDestroy {
  observableResultArray: Array<number> = [];
  subjectResultArray: Array<number> = [];

  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;

  constructor(private exerciseService: ExerciseService) { }

  onSubscribeToObservableButtonClicked() {
    /*
      Übung 1:
      Subscribe das Observable (zu finden in exercise.service.ts)
      und füge die Daten dem observableResultArray hinzu.
    */
  }

  onSubscribeToSubjectButtonClicked() {
    /*
      Übung 2:
      Subscribe das Subject (zu finden in exercise.service.ts)
      und füge die Daten dem subjectResultArray hinzu.
    */
  }

  ngOnDestroy(): void {
    /*
      Übung 3:
      Unsubscribe beide Subscriptions.
    */
  }

}
