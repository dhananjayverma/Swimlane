



import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Block = ({ block, index }) => {
  return (
    <Draggable draggableId={block.id} index={index}>
      {(provided) => (
        <div
          className="block"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {block.name}
        </div>
      )}
    </Draggable>
  );
};

export default Block;
