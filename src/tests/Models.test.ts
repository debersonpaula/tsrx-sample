import '@testing-library/jest-dom';
import './mocks/http';
import { ContactModel } from '../service/models/ContactModel';

describe('ContactModel', () => {
  const model = new ContactModel();
  // -------------------------------------------------------
  it('check model instance', () => {
    expect(model.messages).toEqual([]);
    expect(model.input).toEqual({
      name: '',
      email: '',
      message: '',
    });
  });
  // -------------------------------------------------------
  it('call doFieldUpdate', () => {
    model.doFieldUpdate('name', 'User');
    model.doFieldUpdate('email', 'User@Email');
    model.doFieldUpdate('message', 'something');

    expect(model.input).toEqual({
      name: 'User',
      email: 'User@Email',
      message: 'something',
    });
  });
  // -------------------------------------------------------
  it('call doFieldUpdate', () => {
    model.doSubmit();

    expect(model.messages).toEqual([
      {
        name: 'User',
        email: 'User@Email',
        message: 'something',
      },
    ]);
  });
  // -------------------------------------------------------
});
