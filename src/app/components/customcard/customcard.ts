import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { JupyterAnalysis } from '../../state/models';

@Component({
  selector: 'app-customcard',
  imports: [MatButtonModule, MatCardModule, MatDividerModule,],
  templateUrl: './customcard.html',
  styleUrl: './customcard.css',
})
export class Customcard {
  @Input() item!: JupyterAnalysis;
}
