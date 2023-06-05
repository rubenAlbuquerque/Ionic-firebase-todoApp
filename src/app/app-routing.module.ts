import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterpagePageModule } from './registerpage/registerpage.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import(
        // './registerpage/registerpage.module#RegisterPageModule'
        './registerpage/registerpage.module'
      ).then((m) => m.RegisterpagePageModule),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./logout/logout.module').then((m) => m.LogoutPageModule),
  },
];

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () =>
//       import('./home/home.module').then((m) => m.HomePageModule),
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',
//   },
//   {
//     path: 'login',
//     loadChildren: () =>
//       import('./login/login.module').then((m) => m.LoginPageModule),
//   },
//   {
//     path: 'registerpage',
//     loadChildren: () =>
//       import('./registerpage/registerpage.module').then(
//         (m) => m.RegisterpagePageModule
//       ),
//   },
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
