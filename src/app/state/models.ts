// Jupyter Analysis Data Model
export interface jupyterAnalysis {
    id: number;
    name: string;
    description: string;
    fileTypes: string[];
    tags: string[];
    dataStructure: string;
    numRecords: number;
    numFields: number;
    dateAdded: string;
    downloadLink: string;
    analysisCompleted: boolean;
    logo: string;
    githubLink: string;
}

// Jupyter Analysis View Model
export interface jupyterAnalysisView extends jupyterAnalysis {
    nbViewerLink: string;
}