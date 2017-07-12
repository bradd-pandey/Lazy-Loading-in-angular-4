import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { UserComponent } from './user.component';
import { JsonPlaceHolderService } from './services/json-place-holder.service';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent],
  providers: [JsonPlaceHolderService]
})
export class UserModule { }
