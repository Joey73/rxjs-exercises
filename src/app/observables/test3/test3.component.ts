import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component implements OnDestroy {
  observableResultArray: Array<number> = [];
  subjectResultArray: Array<number> = [];

  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;

  constructor(private exerciseService: ExerciseService) { }

  onSubscribeToObservableButtonClicked() {
    /*
      Übung 1:
      Subscribe das Observable (zu finden in exervice.service.ts)
      und füge die Daten dem observableResultArray hinzu.
    */
    this.subscription1 = this.exerciseService.getExampleDataViaObservable()?.subscribe({
      next: data => {
        this.observableResultArray.unshift(data);
      }
    });
  }

  onSubscribeToSubjectButtonClicked() {
    /*
      Übung 2:
      Subscribe das Subject (zu finden in exervice.service.ts)
      und füge die Daten dem subjectResultArray hinzu.
    */
    this.subscription2 = this.exerciseService.getExampleDataViaSubject()?.subscribe({
      next: data => {
        console.log('onSubscribeToSubjectButtonClicked() - data: ', data);
        this.subjectResultArray.unshift(data);
      }
    });
  }

  ngOnDestroy(): void {
    /*
      Übung 3:
      Unsubscribe beide Subscriptions.
    */
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
  }
}
