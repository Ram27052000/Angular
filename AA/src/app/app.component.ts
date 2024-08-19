import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppointmentAppComponent} from "./appointment-app/appointment-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppointmentAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
