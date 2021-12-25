import * as OrderCreationActionCreaors from './orderCreationActions';
import * as ViewOrderActionCreaors from './veiwOrderActions';
import * as OptionActionCreaors from './optionActions';
import * as UserActionCreaors from './userAction';
import * as ClientActionCreaors from './editClientsActions';
import * as PriceActionCreaors from './priceActions';
import * as RawMaterialsActionCreaors from './editRawMaterialsActions';
import * as ModalWindowActionCreaors from './modalWindowActions/modalWindowActions';
import * as CanvasActions from './CanvasGraphActions';


export default {
  ...OrderCreationActionCreaors,
  ...ViewOrderActionCreaors,
  ...OptionActionCreaors,
  ...UserActionCreaors,
  ...ClientActionCreaors,
  ...PriceActionCreaors,
  ...RawMaterialsActionCreaors,
  ...ModalWindowActionCreaors,
  ...CanvasActions

};