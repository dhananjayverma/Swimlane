// // reducers.js
// import { combineReducers } from 'redux';
// import {
//   MOVE_BLOCK,
//   ADD_BLOCK,
//   SET_FILTER,
//   UPDATE_BLOCK_HISTORY,
//   SET_CONFIG
// } from './actions';

// const initialState = {
//   blocks: [],
//   lanes: [], // Array of lane objects
//   config: {}, // Master configuration for lane transitions
//   filter: {}
// };

// const blocksReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_BLOCK:
//       return [...state, action.payload];
//     case MOVE_BLOCK:
//       return state.map(block =>
//         block.id === action.payload.blockId
//           ? { ...block, laneId: action.payload.newLaneId }
//           : block
//       );
//     case UPDATE_BLOCK_HISTORY:
//       return state.map(block =>
//         block.id === action.payload.blockId
//           ? { ...block, history: [...(block.history || []), action.payload.transition] }
//           : block
//       );
//     default:
//       return state;
//   }
// };

// const lanesReducer = (state = [], action) => {
//   switch (action.type) {
//     // Define cases if needed
//     default:
//       return state;
//   }
// };

// const configReducer = (state = {}, action) => {
//   switch (action.type) {
//     case SET_CONFIG:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = {}, action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   blocks: blocksReducer,
//   lanes: lanesReducer,
//   config: configReducer,
//   filter: filterReducer
// });

// export default rootReducer;







import { combineReducers } from 'redux';
import { SET_CONFIG, MOVE_BLOCK, SET_DATA_ENTRY, SET_FILTER } from './actions';

const initialConfig = {
  allowedTransitions: {},
  lanes: []
};

const configReducer = (state = initialConfig, action) => {
  switch (action.type) {
    case SET_CONFIG:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initialBlocks = {};

const blocksReducer = (state = initialBlocks, action) => {
  switch (action.type) {
    case MOVE_BLOCK:
      const { blockId, newLaneId } = action.payload;
      return {
        ...state,
        [blockId]: {
          ...state[blockId],
          laneId: newLaneId
        }
      };
    case SET_DATA_ENTRY:
      const { data } = action.payload;
      return {
        ...state,
        [data.blockId]: {
          ...state[data.blockId],
          data: data.data
        }
      };
    default:
      return state;
  }
};

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  config: configReducer,
  blocks: blocksReducer,
  filter: filterReducer
});

