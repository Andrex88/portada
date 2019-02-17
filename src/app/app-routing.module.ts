import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { LproductosComponent } from './pages/lproductos/lproductos.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'productos', component: LproductosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
