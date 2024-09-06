// // actions.js
// export const MOVE_BLOCK = 'MOVE_BLOCK';
// export const ADD_BLOCK = 'ADD_BLOCK';
// export const SET_FILTER = 'SET_FILTER';
// export const UPDATE_BLOCK_HISTORY = 'UPDATE_BLOCK_HISTORY';
// export const SET_CONFIG = 'SET_CONFIG';

// export const moveBlock = (blockId, newLaneId) => ({
//   type: MOVE_BLOCK,
//   payload: { blockId, newLaneId }
// });

// export const addBlock = (block) => ({
//   type: ADD_BLOCK,
//   payload: block
// });

// export const setFilter = (filter) => ({
//   type: SET_FILTER,
//   payload: filter
// });

// export const updateBlockHistory = (blockId, transition) => ({
//   type: UPDATE_BLOCK_HISTORY,
//   payload: { blockId, transition }
// });

// export const setConfig = (config) => ({
//   type: SET_CONFIG,
//   payload: config
// });




export const SET_CONFIG = 'SET_CONFIG';
export const MOVE_BLOCK = 'MOVE_BLOCK';
export const SET_DATA_ENTRY = 'SET_DATA_ENTRY';
export const SET_FILTER = 'SET_FILTER';

export const setConfig = (config) => ({ type: SET_CONFIG, payload: config });
export const moveBlock = (blockId, newLaneId) => ({ type: MOVE_BLOCK, payload: { blockId, newLaneId } });
export const setDataEntry = (blockId, data) => ({ type: SET_DATA_ENTRY, payload: { blockId, data } });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
