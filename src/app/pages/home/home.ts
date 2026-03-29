import { Component, inject, OnInit } from '@angular/core';
import { FeatureContainer } from '../../shared/feature-container/feature-container';
import { JupyterAnalysisStore } from '../../state/jupyterAnalysis.store';

@Component({
  selector: 'app-home',
  imports: [FeatureContainer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  jupyterAnalysisStore = inject(JupyterAnalysisStore);

  ngOnInit(): void {
    console.log(this.jupyterAnalysisStore.jupyterAnalysisData());
  }

}
