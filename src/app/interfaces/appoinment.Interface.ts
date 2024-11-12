export interface AppointmentsRes {
    status:       string;
    message:      string;
    appointments: Appointments;
}

export interface Appointments {
    docs:          Doc[];
    totalDocs:     number;
    limit:         number;
    totalPages:    number;
    page:          number;
    pagingCounter: number;
    hasPrevPage:   boolean;
    hasNextPage:   boolean;
    prevPage:      null;
    nextPage:      null;
}

export interface Doc {
    _id:        string;
    idMechanic: ID;
    idClient:   ID;
    day:        number;
    shift:      number;
    services:   string[];
    status:     number;
    comments:   null;
    createdAt:  Date;
    updatedAt:  Date;
    total?: number;
}

export interface ID {
    _id:       string;
    name:      string;
    last_name: string;
}
