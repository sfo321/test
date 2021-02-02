import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./items/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'customer',
    loadChildren: () => import('./items/customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'dynamic',
    loadChildren: () => import('./items/dynamic/dynamic.module').then((m) => m.DynamicModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'account' },
  { path: '**', redirectTo: 'account' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
