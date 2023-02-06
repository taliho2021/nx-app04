import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'nx-app04-layouts',
  standalone: true,
  imports: [CommonModule, MainComponent, SidenavComponent, TopbarComponent],
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
})
export class LayoutsComponent {}
