import * as OrderCreationActionCreaors from './orderCreationActions';
import * as ViewOrderActionCreaors from './veiwOrderActions';
import * as OptionActionCreaors from './optionActions';


export default {
  ...OrderCreationActionCreaors,
  ...ViewOrderActionCreaors,
  ...OptionActionCreaors,
};