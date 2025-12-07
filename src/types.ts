// Type definitions for the portfolio application

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export type ScrollToSection = (sectionId: string) => void;
export type ScrollToContact = () => void;

export interface EmailData {
    from_firstName: string;
    from_lastName: string;
    from_email: string;
    message: string;
    [key: string]: unknown;
}

export interface AutoReplyData {
    to_name: string;
    to_email: string;
    message: string;
    [key: string]: unknown;
}
