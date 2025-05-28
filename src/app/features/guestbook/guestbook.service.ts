import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GuestbookEntry } from 'src/app/types/guestbook.model';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  private entries: GuestbookEntry[] = [
    {
      id: 876,
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello world!',
      createdAt: new Date()
    },
    {
      id: 343,
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'This is a test message.',
      createdAt: new Date()
    }
  ];

  loadEntries(): Observable<GuestbookEntry[]> {
    return of(this.entries);
  }

  add(entry: GuestbookEntry): Observable<GuestbookEntry> {
    entry = { ...entry, id: Math.floor(Math.random() * 1000), createdAt: new Date() };
    this.entries.push(entry);
    return of(entry);
  }

}
