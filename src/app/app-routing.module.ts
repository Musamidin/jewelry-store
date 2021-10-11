import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginLayoutComponent} from './shared/components/login-layout/login-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';


const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginPageComponent, pathMatch: 'full'},
      { path: 'login', component: LoginPageComponent }

    ]
  },
  // {
  //   path: '',
  //   component: HomeLayoutComponent,
  //   children: [
  //     { path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)},
  //     { path: 'logs', loadChildren: () => import('./logs-page/logs-page.module').then(m => m.LogsPageModule)},
  //     { path: 'report', loadChildren: () => import('./report-page/report-page.module').then(m => m.ReportPageModule)},
  //     { path: 'sample', loadChildren: () => import('./sample-page/sample-page.module').then(m => m.SamplePageModule)},
  //     { path: 'category', loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule)},
  //     { path: 'insertion', loadChildren: () => import('./insertion-page/insertion-page.module').then(m => m.InsertionPageModule)},
  //     { path: 'supplier', loadChildren: () => import('./supplier-page/supplier-page.module').then(m => m.SupplierPageModule)},
  //     { path: 'coefficient', loadChildren: () => import('./coefficient-page/coefficient-page.module').then(m => m.CoefficientPageModule)},
  //     { path: 'realizer-page', loadChildren: () => import('./realizer-page/realizer-page.module').then(m => m.RealizerPageModule)},
  //     { path: 'storage', loadChildren: () => import('./storage-page/storage-page.module').then(m => m.StoragePageModule)},
  //     { path: 'settings', loadChildren: () => import('./settings-page/settings-page.module').then(m => m.SettingsPageModule)},
  //   ]
  // },
  { path: '**', redirectTo: '' }

  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
