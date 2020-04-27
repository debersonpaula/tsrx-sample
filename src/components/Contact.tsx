import * as React from 'react';
import { createJssStyle } from '../helper/styler';
import { IContactForm } from '../service/interfaces/IContactForm';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  formContact: {
    '& label': {
      fontWeight: 'bold',
      display: 'inline-block',
      width: 100
    }
  }
});
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Contact extends React.Component<Props> {
  render() {
    const { contactForm } = this.props;
    return (
      <div>
        <p>Please fill the form below to send us a message: </p>
        <div className={classes.formContact}>
          <p>
            <label>Name</label>
            <input onChange={this.handleFieldUpdate('name')} value={contactForm.input.name}/>
          </p>
          <p>
            <label>Email</label>
            <input onChange={this.handleFieldUpdate('email')} value={contactForm.input.email}/>
          </p>
          <p>
            <label>Message</label>
            <textarea onChange={this.handleFieldUpdate('message')} value={contactForm.input.message}/>
          </p>
          <p>
            <button onClick={contactForm.doSubmit}>Send</button>
          </p>
        </div>

        <hr />

        {contactForm.messages.map((item, index) => (
          <p key={index}>
            User: {item.name} ({item.email}) sent the message: {item.message}
          </p>
        ))}
      </div>
    );
  }

  handleFieldUpdate = (fieldName: string) => evt => {
    this.props.contactForm.doFieldUpdate(fieldName, evt.target.value);
  }
}
// ---------------------------------------------------------------------
// --- PROPS -----------------------------------------------------------
// ---------------------------------------------------------------------
interface Props {
  contactForm: IContactForm;
}
