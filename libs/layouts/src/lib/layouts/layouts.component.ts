import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'nx-app04-layouts',
  standalone: true,
  imports: [CommonModule, MainComponent, SidenavComponent, TopbarComponent, FooterComponent],
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
})
export class LayoutsComponent {}
