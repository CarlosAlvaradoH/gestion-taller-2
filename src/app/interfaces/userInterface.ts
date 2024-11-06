export interface LoginResponse {
    status:  string;
    message: string;
    token:   string;
    user:    User;
}

export interface User {
    id:        string;
    role:      string;
    name:      string;
    last_name: string;
    email:     string;
}