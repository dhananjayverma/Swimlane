// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setConfig } from './redux/actions';
// import Swimlane from './components/Swimlane';
// import FilterBar from './components/FilterBar';
// import './App.css';

// function App() {
//   const dispatch = useDispatch();

//   // Example configuration, replace with actual config as needed
//   const initialConfig = {
//     allowedTransitions: {
//       'stage1': ['stage2', 'stage3'],
//       'stage2': ['stage3'],
//       'stage3': []
//     }
//   };

//   // Set initial configuration
//   React.useEffect(() => {
//     dispatch(setConfig(initialConfig));
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <header>
//         <h1>Swimlane UI</h1>
//       </header>
//       <FilterBar />
//       <Swimlane />
//     </div>
//   );
// }

// export default App;





















import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setConfig } from './redux/actions';
import Swimlane from './components/Swimlane';
import FilterBar from './components/FilterBar';
import BlockPreview from './components/BlockPreview';
import DataEntryPrompt from './components/DataEntryPrompt';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [showDataEntry, setShowDataEntry] = useState(false);

  const initialConfig = {
    allowedTransitions: {
      'stage1': ['stage2', 'stage3'],
      'stage2': ['stage3'],
      'stage3': []
    },
    lanes: [
      { id: 'stage1', name: 'Stage 1' },
      { id: 'stage2', name: 'Stage 2' },
      { id: 'stage3', name: 'Stage 3' }
    ]
  };

  React.useEffect(() => {
    dispatch(setConfig(initialConfig));
  }, [dispatch]);

  const handleBlockClick = (blockId) => {
    setSelectedBlock(blockId);
  };

  const handleDataEntry = (blockId) => {
    setShowDataEntry(true);
    setSelectedBlock(blockId);
  };

  return (
    <div className="app">
      <FilterBar />
      <Swimlane onBlockClick={handleBlockClick} onBlockMove={handleDataEntry} />
      {selectedBlock && <BlockPreview blockId={selectedBlock} />}
      {showDataEntry && (
        <DataEntryPrompt
          blockId={selectedBlock}
          onClose={() => setShowDataEntry(false)}
        />
      )}
    </div>
  );
}

export default App;
