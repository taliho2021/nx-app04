import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TopbarComponent } from '@nx-app04/layouts';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nx-app04-operations',
  standalone: true,
  imports: [CommonModule, RouterModule, TopbarComponent],
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
})
export class OperationsComponent {}
