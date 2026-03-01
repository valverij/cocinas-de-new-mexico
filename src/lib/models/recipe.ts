export interface Recipe {
    title: string;
    file: string;
    divId: string;
    html?: string;
}

export interface RecipeData {
    title: string;
    divId: string;
    html?: string;
    active: boolean;
}