import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileUrl: SafeResourceUrl;
  title = 'angular-practice';
  editorData = '';

  constructor(private sanitizer: DomSanitizer) {
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/example.docx');
  }

  print() {
    window.print();
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = 'assets/example.docx';
    link.download = 'example.docx';
    link.click();
  }
}
