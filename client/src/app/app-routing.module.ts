import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
    { path: 'login', component: LoginComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

