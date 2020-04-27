import * as React from 'react';
import { Connection } from 'exredux';
import { Contact } from '../components/Contact';
import { PageContactProps } from './PageContactProps';

@Connection(PageContactProps)
export class PageContact extends React.Component<PageContactProps> {
  render() {
    const { contactModel } = this.props;
    return <Contact contactForm={contactModel} />;
  }
}
