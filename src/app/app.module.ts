import { environment, firebaseConfig } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
         BrowserModule, IonicModule.forRoot(),
         AppRoutingModule,
         ReactiveFormsModule,
         FormsModule,
         AngularFireModule.initializeApp(firebaseConfig),
         AngularFireAuthModule,
         AngularFirestoreModule,
         

        ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
