import { createSelector } from 'reselect';

// Base selectors
const selectBlocksState = state => state.blocks || {};
const selectConfigState = state => state.config || {};
const selectFilterState = state => state.filter || {};

// Memoized selectors
export const selectBlocks = createSelector(
  [selectBlocksState, (state, laneId) => laneId],
  (blocks, laneId) => {
    // Transform the blocks state for a specific lane
    return Array.isArray(blocks[laneId]) ? blocks[laneId] : [];
  }
);

export const selectConfig = createSelector(
  [selectConfigState],
  config => {
    // Ensure config is transformed if needed
    return typeof config === 'object' ? config : {};
  }
);

export const selectFilter = createSelector(
  [selectFilterState],
  filter => {
    // Ensure filter is transformed if needed
    return typeof filter === 'object' ? filter : {};
  }
);
