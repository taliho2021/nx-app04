/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from '@nx-app04/layouts';

@Component({
  selector: 'nx-app04-parties',
  standalone: true,
  imports: [CommonModule, RouterModule, TopbarComponent, MatButtonModule],
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss'],
})
export class PartiesComponent {}
