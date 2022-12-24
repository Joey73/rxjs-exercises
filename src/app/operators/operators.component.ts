import { Component } from '@angular/core';
import { filter, interval, map, Observable, Subject, take } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
  /* Observable mit 10 zufälligen Zahlen (von 0 - 100) welche alle 3 Sekunden
  ausgegeben werden */
  randomNumberObservable$: Observable<number> = interval(3000).pipe(
    take(11),
    map(() => Math.floor(Math.random() * 100))
  );
  task1ResultString: string = '';
  task2ResultString: string = '';
  task3ResultString: string = '';
  randomNumberSubject$: Subject<number> = new Subject<number>();

  constructor() {
  }
  
  onButtonClicked() {
    this.randomNumberObservable$.subscribe(this.randomNumberSubject$);

    // Subscribe randomNumberObservable$ und fülle task1ResultString
    this.randomNumberSubject$.subscribe({
      next: data => this.task1ResultString += `-----${data}`,
      error: e => console.log(e),
    });
    
    // Verdopple jeden Wert und speichere diese in task2ResultString.
    this.randomNumberSubject$.pipe(
      map(x => x * 2)
    ).subscribe({
      next: data => this.task2ResultString += `-----${data}`,
      error: e => console.log(e),
    });

    // Verdopple jeden Wert und speichere alle die > 100 sind in task3ResultString.
    this.randomNumberSubject$.pipe(
      map(x => x * 2),
      filter(x => x > 100)
    ).subscribe({
      next: data => this.task3ResultString += `-----${data}`,
      error: e => console.log(e),
    });
  }

}
