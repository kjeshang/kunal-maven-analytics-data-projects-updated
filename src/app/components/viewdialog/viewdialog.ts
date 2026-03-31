import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-viewdialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './viewdialog.html',
  styleUrl: './viewdialog.css',
})
export class Viewdialog {
  readonly dialogRef: MatDialogRef<Viewdialog> = inject(MatDialogRef<Viewdialog>);
  data = inject(MAT_DIALOG_DATA);
}
