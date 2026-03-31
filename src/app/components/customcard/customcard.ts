import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { JupyterAnalysis } from '../../state/models';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Viewdialog } from '../viewdialog/viewdialog';

@Component({
  selector: 'app-customcard',
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatDialogModule],
  templateUrl: './customcard.html',
  styleUrl: './customcard.css',
})
export class Customcard {
  @Input() item!: JupyterAnalysis;
  readonly dialog: MatDialog = inject(MatDialog);

  /**
   * Click card to open dialog window.
   */
  openAnalysisWindow(): void {
    const dialogRef: MatDialogRef<Viewdialog, any> = this.dialog.open(Viewdialog, {
      width:"99vw",
      height:"95vh"
    });
  }
}
