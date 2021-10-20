import * as ClientActionCreaors from './clientActions';
import * as OrderCreationActionCreaors from './orderCreation';


export default {
  ...ClientActionCreaors,
  ...OrderCreationActionCreaors
};