import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  FormFieldModule,
  InputModule,
  ModalModule,
  IconModule,
  ProgressIndicatorsModule,
  PopModule
} from '@healthcatalyst/cashmere';
import { AppComponent } from './app.component';
import { StorageModule } from '@ngx-pwa/local-storage';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormFieldModule,
    FormsModule,
    InputModule,
    ModalModule,
    IconModule,
    PopModule,
    ProgressIndicatorsModule,
    StorageModule.forRoot({ IDBNoWrap: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
