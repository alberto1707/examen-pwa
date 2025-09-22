import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ui',
  imports: [RouterModule],
  templateUrl: './ui.html',
  styleUrl: './ui.scss'
})
export class Ui {
  constructor(private titleService: Title) {
    this.titleService.setTitle('UI - Examen PWA');
  }
}
