import { Inject } from 'exredux';
import { ContactModel } from '../service/models/ContactModel';
export class PageContactProps {
  @Inject
  contactModel: ContactModel;
}
