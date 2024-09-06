// // Swimlane.js
// import React from 'react';
// import Lane from './Lane';
// import { useSelector } from 'react-redux';
// import { selectLanes, selectBlocks, selectFilter } from '../redux/selectors';

// function Swimlane() {
//   const lanes = useSelector(selectLanes);
//   const blocks = useSelector(selectBlocks);
//   const filter = useSelector(selectFilter);

//   const filteredBlocks = blocks.filter(block => {
//     // Apply filter logic
//     return Object.keys(filter).every(key => block[key] === filter[key]);
//   });

//   return (
//     <div className="swimlane">
//       {lanes.map(lane => (
//         <Lane
//           key={lane.id}
//           lane={lane}
//           blocks={filteredBlocks.filter(block => block.laneId === lane.id)}
//         />
//       ))}
//     </div>
//   );
// }

// export default Swimlane;


import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { selectBlocks, selectConfig } from '../redux/selectors';
import Lane from './Lane';
import { moveBlock } from '../redux/actions';

const Swimlane = () => {
  const dispatch = useDispatch();
  const blocks = useSelector(selectBlocks);
  const config = useSelector(selectConfig);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      dispatch(moveBlock(result.draggableId, destination.droppableId));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="swimlane">
        {config.lanes.map(lane => (
          <Lane key={lane.id} lane={lane} blocks={blocks} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Swimlane;
