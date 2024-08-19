import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {Appointment} from "../models/Appointment";
import {CommonModule} from '@angular/common'


@Component({
  selector: 'app-appointment-app',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './appointment-app.component.html',
  styleUrl: './appointment-app.component.css'
})
export class AppointmentAppComponent implements OnInit {
  newAppointmentName: string = '';
  appointments: Appointment[] = [];
  minDate: string = '';
  newAppointmentDate = new Date();

  constructor() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  ngOnInit() {
    let savedItems = localStorage.getItem("appointments");
    this.appointments = savedItems ? JSON.parse(savedItems) : [];
  }


  addAppointment() {
    if (this.newAppointmentName.trim().length && this.minDate) {
      let newAppointment: Appointment = {
        id: 1,
        name: this.newAppointmentName,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment);
    }
    this.newAppointmentName = '';
    this.minDate = '';

    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }
}
