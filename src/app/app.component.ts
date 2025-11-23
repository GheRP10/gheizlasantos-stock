import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';

type ThemeType = 'dark' | 'light';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'GheizlaSantos - Desafio Consulta de Estoque';
  theme: ThemeType = 'dark';

  ngOnInit(): void {
    const saved = localStorage.getItem('gs-theme') as ThemeType | null;
    if (saved === 'dark' || saved === 'light') {
      this.theme = saved;
    } else {
      this.theme = 'dark';
    }
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('gs-theme', this.theme);
  }
}
