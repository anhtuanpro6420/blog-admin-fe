export interface IQueryParams {
    page?: number;
    limit?: number;
}

export interface IMetadata {
    page?: number;
    limit?: number;
}

export interface IAction {
    type: string;
    payload?: any;
}
