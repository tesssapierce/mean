import { Component, OnInit } from '@angular/core';
import { AddNewRideComponent } from '../add-new-ride/add-new-ride.component'

@Component({
  providers: [ AddNewRideComponent ],
  selector: 'app-myrides',
  templateUrl: './myrides.component.html',
  styleUrls: ['./myrides.component.scss'],
})
export class MyridesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
