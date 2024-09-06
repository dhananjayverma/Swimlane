import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { selectBlocks } from '../redux/selectors';
import './Lane.css'; // Import styles for the Lane component

const Lane = ({ laneId, onBlockClick, onBlockMove }) => {
  const blocks = useSelector(state => selectBlocks(state, laneId));

  // Ensure blocks is an array
  const blocksArray = Array.isArray(blocks) ? blocks : [];

  return (
    <div className="lane">
      <h3>Lane {laneId}</h3>
      {blocksArray.length > 0 ? (
        blocksArray.map((block, index) => (
          <Draggable key={block.id} draggableId={block.id} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="block"
                onClick={() => onBlockClick(block.id)}
                onDoubleClick={() => onBlockMove(block.id)}
              >
                {block.title}
              </div>
            )}
          </Draggable>
        ))
      ) : (
        <p className="no-blocks-message">No blocks available</p>
      )}
    </div>
  );
};

export default Lane;
