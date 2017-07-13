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
  hobbies: string[];
  posts: Post[];
  showUpdate: boolean = false;

  constructor(private jsonPlaceHolderService: JsonPlaceHolderService) { }

  ngOnInit() {
    this.name = 'Bharat Pandey';
    this.hobbies = ['Write code', 'Watch movies', 'Swimming'];
    this.getJSONPlaceholderPosts();
  }

  getJSONPlaceholderPosts() {
    this.jsonPlaceHolderService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
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

}
