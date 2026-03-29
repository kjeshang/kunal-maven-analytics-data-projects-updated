import { inject } from "@angular/core";
import { JupyterAnalysisStore } from "./jupyterAnalysis.store";
import { of } from "rxjs";

export const jupyterAnalysisResolver = async() => {
    const jupyterAnalysisStore = inject(JupyterAnalysisStore);
    await jupyterAnalysisStore.loadJupyterAnalysisData();
    return of(undefined);
}