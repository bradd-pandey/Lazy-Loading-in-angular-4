import { Component, OnInit } from '@angular/core';
import { Address } from './interfaces/address.interface';
import { Post } from './interfaces/post.interface';
import { JsonPlaceHolderService } from './services/json-place-holder.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  showUpdate: boolean = false;
  hideShow: string;

  constructor(private jsonPlaceHolderService: JsonPlaceHolderService) { }

  ngOnInit() {
    this.name = 'Bharat Pandey';
    this.email = 'bpaans@example.com';
    this.age = 30;
    this.address = {
      street: '1400 Esters RD',
      city: 'Irving',
      state: 'TX'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Swimming'];
    this.hideShow = 'Update User';
    this.getJSONPlaceholderPosts();
  }

  getJSONPlaceholderPosts() {
    this.jsonPlaceHolderService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onClick() {
    this.name = `Bharat Pandey 'bpaans'`;
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    if (!this.showUpdate) {
      this.hideShow = 'Collapse Update Section';
    } else {
      this.hideShow = 'Update User'
    }
    this.showUpdate = !this.showUpdate;

  }

}
