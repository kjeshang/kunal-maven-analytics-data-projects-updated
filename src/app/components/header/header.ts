import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JupyterAnalysisStore } from '../../state/jupyterAnalysis.store';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  jupyterAnalysisStore = inject(JupyterAnalysisStore);

  queryFormControl = new FormControl();

  /**
   * On query input, filter available jupyter analysis entries.
   */
  onQueryInput(): void {
    const query: string = this.queryFormControl.value as string;
    this.jupyterAnalysisStore.updateQueryFilter(query);
  }
}
