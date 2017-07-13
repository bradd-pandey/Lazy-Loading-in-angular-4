import { Component, OnInit } from '@angular/core';
import { Address } from './interfaces/address.interface';
import { Person } from './interfaces/person.interface';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  public person: Person;
  public address: Address;
  public showUpdate: boolean;
  public hideShow: string;

  constructor() { }

  ngOnInit() {
    this.person = {
      name: 'Mr. Pandey',
      email: 'bpaans@example.com',
      age: 30
    };
    this.address = {
      street: '1400 Esters RD',
      city: 'Irving',
      state: 'TX'
    };
    this.showUpdate = false;
    this.hideShow = 'UPDATE INFO';
  }

  onClick() {
    this.person.name = 'Mr. Bharat Pandey';
  }

  toggleEdit() {
    if (!this.showUpdate) {
      this.hideShow = 'COLLAPSE NOW';
    } else {
      this.hideShow = 'UPDATE INFO'
    }
    this.showUpdate = !this.showUpdate;
  }

}
