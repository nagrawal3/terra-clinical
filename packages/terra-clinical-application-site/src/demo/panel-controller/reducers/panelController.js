import { disclose, push, pop, maximize, minimize, defaultState } from 'terra-clinical-modal-manager/lib/reducers/disclosureUtils';

import {
  DISCLOSE_PANEL,
  DISMISS_PANEL,
  PUSH_PANEL,
  POP_PANEL,
  MAXIMIZE_PANEL,
  MINIMIZE_PANEL,
} from '../actions/panelController';

const supportedSizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge',
};

const supportedBehaviors = {
  squish: 'squish',
  overlay: 'overlay',
};

const defaultPanelState = Object.assign({}, defaultState, {
  size: supportedSizes.small,
  behavior: supportedBehaviors.squish,
});
const panelManager = (state = defaultPanelState, action) => {
  switch (action.type) {
    case DISCLOSE_PANEL:
      return Object.assign({}, disclose(state, action), {
        size: action.data.size || supportedSizes.small,
        behavior: action.data.behavior || supportedBehaviors.squish,
      });
    case DISMISS_PANEL:
      return defaultPanelState;
    case PUSH_PANEL:
      return push(state, action);
    case POP_PANEL:
      return pop(state, action);
    case MAXIMIZE_PANEL:
      return maximize(state, action);
    case MINIMIZE_PANEL:
      return minimize(state, action);
    default:
      return state;
  }
};

export default panelManager;