import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ServicesComponent } from './component/works/works.component';
import { RoleGuard } from './guards/role.guard';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [RoleGuard],
        data: { role: 'Admin' }
      },
      {
        path: 'tec',
        loadChildren: () => import('./tec/tec.module').then(m => m.TecModule),
        canActivate: [RoleGuard],
        data: { role: 'Tecnico' }
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [RoleGuard],
        data: { role: 'Client' }
      },
      {
        path: "services",
        component: ServicesComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
