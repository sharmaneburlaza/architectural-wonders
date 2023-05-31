import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private customEventSubject = new Subject<any>();

  customEvent$ = this.customEventSubject.asObservable();

  emitCustomEvent(data: any) {
    this.customEventSubject.next(data);
  }
}
