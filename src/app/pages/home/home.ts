import { Component, inject } from '@angular/core';
import { FeatureContainer } from '../../components/feature-container/feature-container';
import { JupyterAnalysisStore } from '../../state/jupyterAnalysis.store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Customcard } from '../../components/customcard/customcard';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Viewdialog } from '../../components/viewdialog/viewdialog';
import { JupyterAnalysis } from '../../state/models';

@Component({
  selector: 'app-home',
  imports: [FeatureContainer, MatProgressSpinnerModule, Customcard, MatDialogModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  jupyterAnalysisStore = inject(JupyterAnalysisStore);

  readonly dialog: MatDialog = inject(MatDialog);

  /**
   * Click card to open dialog window.
   */
  openAnalysisWindow(item: JupyterAnalysis): void {
    this.jupyterAnalysisStore.updateSelectedJupyterAnalysis(item);
    const dialogRef: MatDialogRef<Viewdialog, any> = this.dialog.open(Viewdialog, {
      width:"95vw",
      maxWidth: '100vw',
      height:"95vh",
      data: this.jupyterAnalysisStore.transformedJupyterAnalysisData(),
    });
  }

}
