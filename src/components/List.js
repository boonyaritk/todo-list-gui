import React, { Fragment } from 'react'
import Item from './Item'

function List(props) {
  
  return (
    <Fragment>
        <h3 className="text-center">
            Todo List
        </h3>
        {
        props.items.length === 0 ? '' :
            <ul className="list-group my-5">
                {
                    props.items.map(item => {
                        return (
                            <Item
                                key={item._id}
                                id={item._id}
                                title={item.title}
                                completed={item.completed}
                                handleDeleteTask={props.handleDeleteTask}
                                handleDoneTask={props.handleDoneTask}
                            />
                        )
                    })
                }
            </ul>
        }
    </Fragment>
  )
}

export default List;