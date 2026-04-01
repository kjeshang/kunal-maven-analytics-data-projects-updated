import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { JupyterAnalysisView } from '../../state/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { JupyterAnalysisStore } from '../../state/jupyterAnalysis.store';

@Component({
  selector: 'app-viewdialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './viewdialog.html',
  styleUrl: './viewdialog.css',
})
export class Viewdialog implements OnInit {
  readonly dialogRef: MatDialogRef<Viewdialog> = inject(MatDialogRef<Viewdialog>);
  data: JupyterAnalysisView = inject(MAT_DIALOG_DATA);
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  safeUrl!: SafeResourceUrl;
  jupyterAnalysisStore = inject(JupyterAnalysisStore);

  /**
   * On component init, sanitize nbViewerLink.
   */
  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.nbViewerLink);
  }

  /**
   * Set selected jupyter analysis to "undefined" upon closing analysis dialog window.
   */
  closeAnalysisWindow(): void {
    this.jupyterAnalysisStore.updateSelectedJupyterAnalysis(undefined);
  }
}
