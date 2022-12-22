import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  // testSubject$ = new Subject<string>();
  
  constructor() { }

  /*
  public sendData(data: string) {
    this.testSubject$.next(data);
  }

  public onData(): Observable<string> {
    return this.testSubject$.asObservable();
  }
  */ 
}
