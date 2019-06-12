import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface EventBusArgs { type: String; data: any; }

@Injectable()
export class EventBusService {

  private _messages$ = new Subject<EventBusArgs>();

  constructor() { }

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this._messages$.pipe(
      filter(args => args.type === eventType),
      map(args => args.data)
    );
  }
}
