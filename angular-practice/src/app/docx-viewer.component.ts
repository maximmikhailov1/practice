import { Component, OnInit } from '@angular/core';
import { DocxService } from "./services/docx.service"; // Измените путь, если ваш сервис находится в другом месте

@Component({
  selector: 'app-docx-viewer',
  templateUrl: './docx-viewer.component.html',
  standalone: true,
  styleUrls: ['./docx-viewer.component.css']
})
export class DocxViewerComponent implements OnInit {

  htmlContent: string = '';

  constructor(private docxService: DocxService) { }

  ngOnInit(): void {
    this.loadDocxContent();
  }

  loadDocxContent() {
    this.docxService.getDocxAsHtml().subscribe(
      (html: string) => {
        this.htmlContent = html; // Получаем HTML от сервера
      },
      (error) => {
        console.error('Ошибка при загрузке .docx файла', error);
      }
    );
  }
}
