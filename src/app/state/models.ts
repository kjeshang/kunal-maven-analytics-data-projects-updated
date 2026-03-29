// Jupyter Analysis Data Model
export interface JupyterAnalysis {
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
export interface JupyterAnalysisView extends JupyterAnalysis {
    nbViewerLink: string;
}