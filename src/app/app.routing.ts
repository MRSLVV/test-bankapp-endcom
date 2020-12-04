import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { CuentaComponent } from './components/cuenta/cuenta.component';
import { Bankapp2Component } from './components/bankapp2/bankapp2.component';

const appRoutes: Routes = [
    {path: '', component: CuentaComponent},
    {path: 'bankapp2', component: Bankapp2Component },
    {path: '**', component: CuentaComponent} 
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders <any>  = RouterModule.forRoot(appRoutes); 
