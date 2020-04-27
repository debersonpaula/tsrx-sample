import { Action } from 'exredux';
import { IContactForm, IContactMessage } from '../interfaces/IContactForm';

export class ContactModel implements IContactForm {
  messages = [];
  input = {
    name: '',
    email: '',
    message: '',
  };

  @Action
  doFieldUpdate(fieldName: string, value: string) {
    this.input[fieldName] = value;
  }

  @Action
  doSubmit() {
    this.messages.push(Object.assign({}, this.input));
  }
}
