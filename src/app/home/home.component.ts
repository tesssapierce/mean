import { Component, Input, OnInit } from '@angular/core';
import { User } from '@app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() user: User | null = null;

  constructor() { }

  ngOnInit() {
    
  }

}
