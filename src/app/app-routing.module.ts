import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
