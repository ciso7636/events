import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstant";
import { createReducer } from "../../app/common/util/reducerUtil";

const initialState = null;

const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

const closeModal = (state, payload) => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
