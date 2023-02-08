/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '@nx-app04/layouts';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'nx-app04-parties',
  standalone: true,
  imports: [CommonModule, RouterModule, TopbarComponent, MatButtonModule],
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss'],
})
export class PartiesComponent {}
