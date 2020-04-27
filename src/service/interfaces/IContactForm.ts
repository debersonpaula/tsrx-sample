export interface IContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface IContactForm {
  messages: IContactMessage[];
  input: IContactMessage;
  doFieldUpdate: (fieldName: string, value: string) => void;
  doSubmit: () => void;
}
