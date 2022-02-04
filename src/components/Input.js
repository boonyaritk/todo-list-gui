import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

function Input(props) {

  return (
    <div className="card card-body my-3">
        <form onSubmit={props.handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="New Todo"
                    value={props.item}
                    onChange={props.handleChange}
                />
            </div>

            <button 
                type="submit"
                className={`btn btn-block mt-3 btn-info text-white`}
            >
                Add new task
            </button>
        </form>
    </div>
  )
}

export default Input;