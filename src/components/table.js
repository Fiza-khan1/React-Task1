import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';

const Table = () => {
  return (
    <div className="container mt-5 table-container" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className='mb-0'><strong>Task List</strong></h2>
        <button className="btn btn-primary btn-add-task d-flex align-items-center justify-content-center" style={{ width: '150px', height: '40px' }}>
          <FaPlus className="me-2" style={{ fontSize: '0.8em' }} /> <span style={{ fontSize: '1.1em' }}>Add Task</span>
        </button>
      </div>

      <div className="row align-items-center mb-3" style={{ boxShadow: '2px 7px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', backgroundColor: '#fff' }}>
        <div className="col-3">
          <small className="text-muted">Task</small>
          <div style={{ fontWeight: 'bold' }}>Sample Task 1</div>
        </div>
        <div className="col-3">
          <small className="text-muted">Priority</small>
          <div className="priority-high">High</div>
        </div>
        <div className="col-3">
          <div>To Do</div>
        </div>
        <div className="col-3 text-end">
          <FaEdit className="me-3" style={{ cursor: 'pointer', fontSize: '1.2em' }} />
          <FaTrashAlt style={{ cursor: 'pointer', color: '#ff1493', fontSize: '1.2em' }} />
        </div>
      </div>

      <div className="row align-items-center mb-3" style={{ boxShadow: '0 7px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', backgroundColor: '#fff' }}>
        <div className="col-3">
          <small className="text-muted">Task</small>
          <div style={{ fontWeight: 'bold' }}>Sample Task 2</div>
        </div>
        <div className="col-3">
          <small className="text-muted">Priority</small>
          <div className="priority-high">High</div>
        </div>
        <div className="col-3">
          <div>To Do</div>
        </div>
        <div className="col-3 text-end">
          <FaEdit className="me-3" style={{ cursor: 'pointer', fontSize: '1.2em' }} />
          <FaTrashAlt style={{ cursor: 'pointer', color: '#ff1493', fontSize: '1.2em' }} />
        </div>
      </div>

      <div className="row align-items-center mb-3" style={{ boxShadow: '0 7px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', backgroundColor: '#fff' }}>
        <div className="col-3">
          <small className="text-muted">Task</small>
          <div style={{ fontWeight: 'bold' }}>Sample Task 3</div>
        </div>
        <div className="col-3">
          <small className="text-muted">Priority</small>
          <div className="priority-medium">Medium</div>
        </div>
        <div className="col-3">
          <div>To Do</div>
        </div>
        <div className="col-3 text-end">
          <FaEdit className="me-3" style={{ cursor: 'pointer', fontSize: '1.2em' }} />
          <FaTrashAlt style={{ cursor: 'pointer', color: '#ff1493', fontSize: '1.2em' }} />
        </div>
      </div>

      <div className="row align-items-center mb-3" style={{ boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '10px', backgroundColor: '#fff' }}>
        <div className="col-3">
          <small className="text-muted">Task</small>
          <div style={{ fontWeight: 'bold' }}>Sample Task 4</div>
        </div>
        <div className="col-3">
          <small className="text-muted">Priority</small>
          <div className="priority-low">Low</div>
        </div>
        <div className="col-3">
          <div>In Progress</div>
        </div>
        <div className="col-3 text-end">
          <FaEdit className="me-3" style={{ cursor: 'pointer', fontSize: '1.2em' }} />
          <FaTrashAlt style={{ cursor: 'pointer', color: '#ff1493', fontSize: '1.2em' }} />
        </div>
      </div>
    </div>
  );
};

export default Table;
