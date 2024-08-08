import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import AppSubject from "@app/app.subject";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService, AppSubject],
})
export class AppComponent implements OnInit {
  constructor(
    private appSubject: AppSubject,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.appSubject.message$
      .subscribe((message) => {
        if(!message) return;

        this.messageService.add({
          severity: message?.type,
          summary: message?.title,
          detail: message?.description,
        })
      })
  }
}
