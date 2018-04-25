import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { PedidosService } from './services/pedidos.service';
import { SessionService } from './services/session.service';
import { ProductosService } from './services/productos.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		LoginComponent,
		PedidoComponent
	],
	imports: [
		BrowserModule,
		app_routing
	],
	providers: [
		PedidosService,
		SessionService,
		ProductosService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
