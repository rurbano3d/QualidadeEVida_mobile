import produce from 'immer';

const INITIAL_STATE = {
  orders: [],
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/ORDER_REQUEST': {
        break;
      }

      case '@order/ORDER_REMOVE': {
        break;
      }

      case '@order/ORDER_SUCCESS': {
        draft.orders = action.payload.orders;
        break;
      }

      case '@order/ORDER_FAILURE': {
        break;
      }

      default:
    }
  });
}
