import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GuestbookListComponent } from '../guestbook-list/guestbook-list.component';
import { selectGuestbookEntries } from 'src/app/store/guestbook/guestbook.selector';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-guestbook-page',
  imports: [NgIf, MatCardModule, GuestbookListComponent],
  templateUrl: './guestbook-page.component.html',
  styleUrl: './guestbook-page.component.scss'
})
export class GuestbookPageComponent {
  guestPosts = this.store.selectSignal(selectGuestbookEntries);
  loading = false;
  errorMessage = '';

  constructor(private store: Store) { }

}
