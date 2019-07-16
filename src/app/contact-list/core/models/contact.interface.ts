export interface Contact {
    id?: number | string;
    name: string;
    lastName: string;
    email: string;
    phone?: string;
}

export interface ContactList {
    contact: Array<Contact>;
}