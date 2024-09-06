

import React from 'react';
import { useSelector } from 'react-redux';
import { selectBlocks } from '../redux/selectors';

const BlockPreview = ({ blockId }) => {
  const blocks = useSelector(selectBlocks);
  const block = blocks[blockId];

  if (!block) return null;

  return (
    <div className="block-preview">
      <h3>{block.name}</h3>
      <p>Transition History:</p>
      <ul>
        {block.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlockPreview;

