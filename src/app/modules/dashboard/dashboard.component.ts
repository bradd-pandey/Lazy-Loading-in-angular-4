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
      name: 'Bharat',
      email: 'bpaans@example.com',
      age: 30
    };
    this.address = {
      street: '1400 Esters RD',
      city: 'Irving',
      state: 'TX'
    };
    this.showUpdate = false;
    this.hideShow = 'Update Info';
  }

  onClick() {
    this.person.name = 'Bharat Pandey';
  }

  toggleEdit() {
    if (!this.showUpdate) {
      this.hideShow = 'Collapse Now';
    } else {
      this.hideShow = 'Update Info'
    }
    this.showUpdate = !this.showUpdate;
  }

}
