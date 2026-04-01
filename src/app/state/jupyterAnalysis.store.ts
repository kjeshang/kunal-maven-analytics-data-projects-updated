import { computed, inject } from "@angular/core";
import { DbService } from "./db.service";
import { JupyterAnalysis, JupyterAnalysisView } from "./models"
import {
    patchState,
    signalStore,
    withComputed,
    withMethods,
    withState,
} from '@ngrx/signals';
import { chain } from "lodash";


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
        },
        /**
         * Update query
         */
        async updateQueryFilter(query: string): Promise<void> {
            patchState(store, (state: JupyterAnalysisState) => ({
                query: query,
            }));
        },
        /**
         * Update selected jupyter analysis
         */
        async updateSelectedJupyterAnalysis(selectedJupyterAnalysis: JupyterAnalysis | undefined): Promise<void> {
            patchState(store, (state: JupyterAnalysisState) => ({
                selectedJupyterAnalysis: selectedJupyterAnalysis
            }))
        }
    })),
    withComputed((
        {
            jupyterAnalysisData,
            query,
            selectedJupyterAnalysis,
        }
    ) => ({
        /**
         * Filter data based on name, description, data structure, filetypes, and tags using query filter.
         */
        filteredJupyterAnalysisData: computed(() => {
            const data: JupyterAnalysis[] = chain(jupyterAnalysisData())
                .filter((el: JupyterAnalysis) => 
                    el.name.toLowerCase().includes(query().toLowerCase()) ||
                    el.description.toLowerCase().includes(query().toLowerCase()) ||
                    el.dataStructure.toLowerCase().includes(query().toLowerCase()) ||
                    el.fileTypes.join(",").toLowerCase().includes(query().toLowerCase()) ||
                    el.tags.join(",").toLowerCase().includes(query().toLowerCase())
                )
                .value();
            return data;
        }),
        /**
         * Transform selected jupyter analysis so that the Github link is converted to an Nbviewer link so that it can be displayed in an iframe.
         */
        transformedJupyterAnalysisData: computed(() => {
            const data: JupyterAnalysisView = {
                ...selectedJupyterAnalysis()!,
                nbViewerLink: selectedJupyterAnalysis()!.githubLink.replace('github.com','nbviewer.org/github'),
            };
            return data;
        })
    }))
)