import { ClienteService } from './service/ClienteService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { Interceptor } from './auth/interceptor.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsRequestInterceptor } from './auth/interceptor.module';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormAvaliacaoComponent } from './form-avaliacao/form-avaliacao.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    FormUsuarioComponent,
    FormAvaliacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Interceptor,
    ReactiveFormsModule
  ],
  providers: [ClienteService,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor ,
      multi: true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
