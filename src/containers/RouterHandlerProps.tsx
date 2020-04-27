import { Inject } from 'exredux';
import { RouterModel } from '../service/models/RouterModel';
export class RouterHandlerProps {
  @Inject
  router?: RouterModel;
}
