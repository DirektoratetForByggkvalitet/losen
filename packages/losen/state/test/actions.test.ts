import {
  setData,
  resetData,
  resetModal,
  setLanguage,
  SET_DATA,
  RESET_DATA,
  SHOW_RESET_MODAL,
} from '../actions';

describe('actions creators', () => {
  it('setData returns action', () => {
    expect(setData('myProperty', 123)).toEqual({
      type: SET_DATA,
      payload: { key: 'myProperty', value: 123 },
    });
  });

  it('resetData returns action', () => {
    expect(resetData()).toEqual({ type: RESET_DATA });
  });

  describe('resetModal', () => {
    it('returns action for opening modal', () => {
      expect(resetModal(true)).toEqual({
        type: SHOW_RESET_MODAL,
        payload: { show: true },
      });
    });

    it('returns action for closing modal', () => {
      expect(resetModal(false)).toEqual({
        type: SHOW_RESET_MODAL,
        payload: { show: false },
      });
    });
  });

  it('setLanguage', () => {
    expect(setLanguage('se')).toEqual({
      type: SET_DATA,
      payload: { key: '$language', value: 'se' },
    });
  });
});
