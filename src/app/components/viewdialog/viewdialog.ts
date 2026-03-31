import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { JupyterAnalysis } from '../../state/models';

@Component({
  selector: 'app-viewdialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './viewdialog.html',
  styleUrl: './viewdialog.css',
})
export class Viewdialog {
  readonly dialogRef: MatDialogRef<Viewdialog> = inject(MatDialogRef<Viewdialog>);
  data: JupyterAnalysis = inject(MAT_DIALOG_DATA);
}
