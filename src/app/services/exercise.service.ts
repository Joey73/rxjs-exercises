import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subject, Subscription, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService implements OnInit, OnDestroy {
  exampleObservable$: Observable<number> | undefined = undefined;
  exampleSubject$ = new Subject<number>();
  exampleObservableSubscription: Subscription | undefined;
  
  constructor() {
  }

  ngOnInit(): void {
  }

  initExampleObservableAndSubject() {
    console.log('initExampleObservableAndSubject()');
    // Init Observable
    this.exampleObservable$  = interval(1000).pipe(
      take(101),
      map(i => i)
    );

    // Init Subject
    this.exampleObservableSubscription = this.exampleObservable$.subscribe(this.exampleSubject$);
    /*
    this.exampleObservableSubscription = this.exampleObservable$.subscribe({
      next: data => this.exampleSubject$.next(data),
      error: e => this.exampleSubject$.error(e),
      complete: () => this.exampleSubject$.complete()
    });
    */
  }

  public getExampleDataViaObservable() {
    return this.exampleObservable$;
  }

  public getExampleDataViaSubject(): Observable<number> | undefined {
    console.log('getExampleDataViaSubject()');
    return this.exampleSubject$.asObservable();
  }

  /*
  public sendData(data: string) {
    this.testSubject$.next(data);
  }

  public onData(): Observable<string> {
    return this.testSubject$.asObservable();
  }
  */
 
  ngOnDestroy(): void {
    this.exampleObservableSubscription?.unsubscribe();
  }
}
