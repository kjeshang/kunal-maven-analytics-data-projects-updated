import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JupyterAnalysisStore } from '../../state/jupyterAnalysis.store';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSlideToggleModule, MatTooltipModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  jupyterAnalysisStore = inject(JupyterAnalysisStore);

  queryFormControl: FormControl = new FormControl();
  toggleAnalysisCompletedFormControl: FormControl = new FormControl(this.jupyterAnalysisStore.toggleAnalysisCompleted());
  private _snackBar = inject(MatSnackBar);

  /**
   * On query input, filter available jupyter analysis entries.
   */
  onQueryInput(): void {
    const query: string = this.queryFormControl.value as string;
    this.jupyterAnalysisStore.updateQueryFilter(query);
  }

  /**
   * On slide toggle, filter available jupyter analysis entries by completion status.
   */
  onToggleCompletionStatus(): void {
    this.jupyterAnalysisStore.updateToggleAnalysisCompletedFilter(this.toggleAnalysisCompletedFormControl.value);
    const snackbarMessage: string = this.jupyterAnalysisStore.toggleAnalysisCompleted() ? "Toggled Completed Projects" : "Toggled All Projects";
    this._snackBar.open(snackbarMessage, 'Dismiss', {
      duration: 3000,
      verticalPosition: 'bottom'
    });
  }
}
