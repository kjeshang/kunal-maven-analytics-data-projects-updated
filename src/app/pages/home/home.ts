import { Component, inject, OnInit } from '@angular/core';
import { FeatureContainer } from '../../components/feature-container/feature-container';
import { JupyterAnalysisStore } from '../../state/jupyterAnalysis.store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Customcard } from '../../components/customcard/customcard';

@Component({
  selector: 'app-home',
  imports: [FeatureContainer, MatProgressSpinnerModule, Customcard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  jupyterAnalysisStore = inject(JupyterAnalysisStore);

}
