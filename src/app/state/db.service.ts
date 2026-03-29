import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { JupyterAnalysis } from "./models";
import { firstValueFrom } from "rxjs";

@Injectable({providedIn: 'root'})
export class DbService {
    http: HttpClient = inject(HttpClient);

    /**
     * Retrieve Jupyter Analysis Data
     */
    async getJupyterAnalysisData(): Promise<JupyterAnalysis[]> {
        const url: string = "https://raw.githubusercontent.com/kjeshang/KunalMavenAnalyticsDataPlayground/refs/heads/main/data.json";
        const data: JupyterAnalysis[] = await firstValueFrom(this.http.get<JupyterAnalysis[]>(url));
        return data;
    }
}