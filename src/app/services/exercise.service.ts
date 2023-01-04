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
    this.initExampleObservable();
    this.initExampleSubject();
  }

  private initExampleObservable() {
    this.exampleObservable$  = interval(1000).pipe(
      take(21)
    );
  }

  private initExampleSubject() {
    this.exampleObservableSubscription = this.exampleObservable$?.subscribe(this.exampleSubject$);
    /*
    this.exampleObservableSubscription = this.exampleObservable$?.subscribe({
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
 
  ngOnDestroy(): void {
    this.exampleObservableSubscription?.unsubscribe();
  }
}
