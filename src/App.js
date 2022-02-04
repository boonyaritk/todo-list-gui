import React, { useEffect, useState } from 'react'
import moment from 'moment';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Input from './components/Input'
import todoListDateService from "./services/todoListService"
import List from './components/List'


function App() {
  const [item, setItem ] = useState('');
  const [items, setItems] = useState([]);

  useEffect(async () => {
    try {
      const result = await todoListDateService.getAll()
      setItems(result.data)
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const handleChange = e => {
    setItem(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const NewItem = {
      title: item,
      completed: false,
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      endedAt: null
    }

    todoListDateService.create(NewItem)
      .then(res => {
        window.location.reload(false);
      })
      .catch(e => {
        console.log(e);
      })
  }

  const handleDoneTask = (id, completed) => {
    const endedAt = moment().format("YYYY-MM-DD HH:mm:ss");
    todoListDateService.update(id, {completed : !completed, endedAt})
      .then(res => {
        const todoList = items.map(item => {
          if (item._id === id) {
            return {
              _id: item._id,
              title: item.title,
              completed: !completed,
              createAt: item.createAt,
              endedAt
            }
          }
          return item
        })
        setItems(todoList)
      })
      .catch(e => {
        console.log(e);
      })
  }

  const handleDeleteTask = id => {
    todoListDateService.remove(id)
      .then(res => {
        window.location.reload(false);
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-4">
          <h3 className="text-capitalize text-center">Input</h3>
          <Input
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <List
            items={items}
            handleDoneTask={handleDoneTask}
            handleDeleteTask={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
