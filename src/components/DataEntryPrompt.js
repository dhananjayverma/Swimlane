




import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDataEntry } from '../redux/actions';

const DataEntryPrompt = ({ blockId, onClose }) => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setDataEntry(blockId, data));
    onClose();
  };

  return (
    <div className="data-entry-prompt">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter transition data"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DataEntryPrompt;


