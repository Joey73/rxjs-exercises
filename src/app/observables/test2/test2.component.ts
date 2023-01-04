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
      Exercise 1:
      Subscribe to the Observable (which you will find in the exercise.service.ts)
      and add the receiving data to the observableResultArray.
    */
    this.exerciseService.getExampleDataViaObservable()?.subscribe({
      next: data => {
        this.observableResultArray.unshift(data);
      }
    });
  }

  onSubscribeToSubjectButtonClicked() {
    /*
      Exercise 2:
      Subscribe to the Subject (which you will find in the exercise.service.ts)
      and add the receiving data to the subjectResultArray.
    */
    this.exerciseService.getExampleDataViaSubject()?.subscribe({
      next: data => {
        this.subjectResultArray.unshift(data);
      }
    });
  }

  ngOnDestroy(): void {
    /*
      Exercise 3:
      Unsubscribe both subscriptions
    */
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
  }

}
