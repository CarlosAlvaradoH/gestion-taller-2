export interface AppointmentsResCreate {
    status:      string;
    message:     string;
    appointment: Appointment;
}

export interface Appointment {
    idMechanic: string;
    idClient:   string;
    day:        number;
    shift:      number;
    services:   string[];
    status:     number;
    comments:   null;
    _id:        string;
    createdAt:  Date;
    updatedAt:  Date;
    __v:        number;
}