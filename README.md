# Getting started with Angular 4 application

## Prerequisites
Both the CLI and generated project have dependencies that require [Node 6.9.0 or higher] (https://nodejs.org/en/), together with NPM 3 or higher.

## Source code editor
[Visual Studio Code] (https://code.visualstudio.com/) includes Integrated terminal, debugging and extensions, can be a good option.

# Create Angular project
This project was generated with [Angular CLI] (https://github.com/angular/angular-cli) version 1.2.0.

1. Open up VC code terminal and install angular cli globally. Run `npm install -g @angular/cli`
2. cd into your desire/projects folder and create new project, Run `ng new ng4-app`
3. cd into your-project-name; in this case `ng4-app` folder
4. Run `ng serve` or, `npm start` for a development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You can also configure the default HTTP host and port used by the development server with two command-line options: `ng serve --host 0.0.0.0 --port 4201`

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.


# Lazy Loading in Angular 4 application
Lazy loading speeds up the application load time by splitting it into multiple bundles, and loading them on demand, as the user navigates throughout the app. As a result, the initial bundle is much smaller, which improves the bootstrap time.

## Lets get into it!
1. cd into `ng4-app` folder
2. generate a module inside `ng4-app/modules` folder. Run `ng generate module modules/user` or, `ng g module modules/user` 
3. set up routes in `app.module.ts`
...
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
...
//  `dashboard component => Eager loading` and `user module => lazy loading` const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
      path: 'dashboard', 
      component: DashboardComponent, 
  },
  {
    path: 'user',
    loadChildren: 'app/modules/user/user.module#UserModule'
  }
]; @NgModule({
    ...
  imports: [
    `RouterModule.forRoot(routes)`
  ],
  ...
})

4. replace `app.component.html` content by `<router-outlet></router-outlet>`
5. set up routes in `user.module.ts`
...
import { Routes, RouterModule } from '@angular/router';
...
const routes: Routes = [
    {
        path: '',
        component: UserComponent
    }
]; @NgModule({
    ...
   imports: [
    ...
    `RouterModule.forChild(routes)`
  ],
  ...
})
6. Run `ng serve` or, `npm start` for a development server. Navigate to `http://localhost:4200/`.


