import { Component } from '@angular/core';
import { FeatureContainer } from '../../shared/feature-container/feature-container';

@Component({
  selector: 'app-home',
  imports: [FeatureContainer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
