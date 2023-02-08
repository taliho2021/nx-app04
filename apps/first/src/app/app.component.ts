import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from '@nx-app04/layouts';


@Component({
  selector: 'nx-app04-root',
  standalone: true,
  imports: [RouterModule, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first';
}
