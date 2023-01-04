import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, Subject, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnDestroy {
  /*
    Observable mit 10 zufälligen Zahlen (von 0 - 100) welche alle 3 Sekunden
    ausgegeben werden
   */
  randomNumberObservable$: Observable<number> = interval(3000).pipe(
    take(11),
    map(() => Math.floor(Math.random() * 100))
  );
  task1ResultString: string = '';
  task2ResultString: string = '';
  task3ResultString: string = '';
  randomNumberSubject$: Subject<number> = new Subject<number>();

  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;
  subscription3: Subscription | undefined;
  subscription4: Subscription | undefined;

  constructor() {
  }
  
  onButtonClicked() {
    this.subscription1 = this.randomNumberObservable$.subscribe(this.randomNumberSubject$);

    // Übrung 1: Subscribe randomNumberSubject$ und fülle task1ResultString
    
    // Übung 2: Verdopple jeden Wert und speichere diese in task2ResultString.

    // Übung 3: Verdopple jeden Wert und speichere alle die > 100 sind in task3ResultString.
  }

  ngOnDestroy(): void {
    // Übung 4: Alle Subscriptions unsubscriben
  }

}
