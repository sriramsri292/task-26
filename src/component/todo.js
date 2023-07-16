import React, { useState } from 'react';

const Todo = () => {
  const [taskNames, setTaskNames] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleName = (event) => {
    setTaskName(event.target.value);
  };

  const handleDisc = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskNames([...taskNames, taskName]);
    setDescriptions([...descriptions, description]);
    setStatuses([...statuses, 'not completed']);
    setTaskName('');
    setDescription('');
  };

  const handleFilter = (filterOption) => {
    setSelectedFilter(filterOption);
  };

  const handleToggle = (index) => {
    const updatedStatuses = [...statuses];
    updatedStatuses[index] = updatedStatuses[index] === 'completed' ? 'not completed' : 'completed';
    setStatuses(updatedStatuses);
  };

  const handleDelete = (index) => {
    const updatedTaskNames = [...taskNames];
    const updatedDescriptions = [...descriptions];
    const updatedStatuses = [...statuses];
    updatedTaskNames.splice(index, 1);
    updatedDescriptions.splice(index, 1);
    updatedStatuses.splice(index, 1);
    setTaskNames(updatedTaskNames);
    setDescriptions(updatedDescriptions);
    setStatuses(updatedStatuses);
  };

  const filterTasks = () => {
    if (selectedFilter === 'all') {
      return descriptions.map((d, index) => (
        <div key={index} className="square">
          <div>
            <strong>Name:</strong> {taskNames[index]}
          </div>
          <div>
            <strong>Description:</strong> {d}
          </div>
          <strong>Status:</strong>
          <button onClick={() => handleToggle(index)}>
            {statuses[index] === 'completed' ? 'Completed' : 'Not Completed'}
          </button>
          <div>
            <button className='b'>EDIT</button>
            <button className='bb' onClick={() => handleDelete(index)}>DELETE</button>
          </div>
        </div>
      ));
    } else {
      const filteredTasks = descriptions.filter((_, index) => index + 1 === parseInt(selectedFilter));
      return filteredTasks.map((d, index) => (
        <div key={index} className="square">
          <div>
            <strong>Name:</strong> {taskNames[index]}
          </div>
          <div>
            <strong>Description:</strong> {d}
          </div>
          <strong>Status:</strong>
          <button onClick={() => handleToggle(index)}>
            {statuses[index] === 'completed' ? 'Completed' : 'Not Completed'}
          </button>
          <div>
            <button className='b'>EDIT</button>
            <button className='bb' onClick={() => handleDelete(index)}>DELETE</button>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="sri">
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: 'green' }}>My Todo</h1>
        <input
          id="a"
          type="text"
          value={taskName}
          onChange={handleName}
          placeholder="Task Name"
        />
        <input
          id="aa"
          type="text"
          value={description}
          onChange={handleDisc}
          placeholder="Description"
        />
        <button id="aaa" style={{ backgroundColor: 'green', margin: '10px' }}>
          Add to Todo
        </button>
        <br />
        <h7 className='aaa'>My Todos</h7>
        <button onClick={() => handleFilter('all')}>Show All</button>
        <button onClick={() => handleFilter('1')}>1</button>
        <button onClick={() => handleFilter('2')}>2</button>
        <button onClick={() => handleFilter('3')}>3</button>
      </form>
      <div>{filterTasks()}</div>
    </div>
  );
};

export default Todo;
