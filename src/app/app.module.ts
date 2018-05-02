import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SampleComponent } from './components/sample/sample.component';

import { PedidosService } from './services/pedidos.service';
import { SessionService } from './services/session.service';
import { ProductosService } from './services/productos.service';
import { HelperService } from './services/helper.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		LoginComponent,
		PedidoComponent,
		SampleComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		app_routing
	],
	providers: [
		PedidosService,
		SessionService,
		ProductosService,
		HelperService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
