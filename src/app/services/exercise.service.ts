import { Injectable } from '@angular/core';
import { interval, map, Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  numberObservable$: Observable<number> | undefined = undefined;
  numberSubject$: Subject<string> | undefined = undefined;
  
  constructor() { }

  public initDataObservable() {
    this.numberObservable$ = interval(1000).pipe(
      take(101),
      map(i => i)
    );
  }

  /*
  public sendData(data: string) {
    this.testSubject$.next(data);
  }

  public onData(): Observable<string> {
    return this.testSubject$.asObservable();
  }
  */ 
}
