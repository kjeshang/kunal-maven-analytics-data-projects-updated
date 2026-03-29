import { inject } from "@angular/core";
import { DbService } from "./db.service";
import { JupyterAnalysis } from "./models"
import {
    patchState,
    signalStore,
    withComputed,
    withMethods,
    withState,
} from '@ngrx/signals';


type JupyterAnalysisState = {
    jupyterAnalysisData: JupyterAnalysis[];
    isLoading: boolean;
    query: string;
    selectedJupyterAnalysis: JupyterAnalysis | undefined;
}

const initialJupyterAnalysisState: JupyterAnalysisState = {
    jupyterAnalysisData: [],
    isLoading: false,
    query: '',
    selectedJupyterAnalysis: undefined,
}

export const JupyterAnalysisStore = signalStore(
    { providedIn: 'root' },
    withState(initialJupyterAnalysisState),
    withMethods((store, db: DbService = inject(DbService)) => ({
        /**
         * Load Jupyter Analysis Data
         */
        async loadJupyterAnalysisData(): Promise<void> {
            // Set "isLoading" to true
            patchState(store, (state: JupyterAnalysisState) => ({
                isLoading: true,
            }));
            // Load data using db service function
            const data: JupyterAnalysis[] = await db.getJupyterAnalysisData();
            // Append state with loaded data and set "isLoading" to false
            patchState(store, (state: JupyterAnalysisState) => ({
                isLoading: false,
                jupyterAnalysisData: data,
            }))
        }
    }))
)