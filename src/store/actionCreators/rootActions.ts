import * as ClientActionCreaors from './clientActions';
import * as OrderCreationActionCreaors from './orderCreationActions';
import * as ViewOrderActionCreaors from './veiwOrderActions';


export default {
  ...ClientActionCreaors,
  ...OrderCreationActionCreaors,
  ...ViewOrderActionCreaors,
};