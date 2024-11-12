export interface Technicians {
    status:      string;
    users:       User[];
    totalDocs:   number;
    totalPage:   number;
    currentPage: number;
}

export interface User {
    _id:       string;
    role:      string;
    name:      string;
    last_name: string;
    document:  string;
    email:     string;
    isDeleted: boolean;
}
