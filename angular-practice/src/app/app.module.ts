import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { CKEditorModule } from 'ckeditor4-angular';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {DocxService} from "./services/docx.service";

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    FileViewerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DocxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
