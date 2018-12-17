import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task';
import styles from './index.module.css';
import { BigButton } from '../button';
import { useMutation } from 'react-apollo-hooks';
import { ADD_TASK, GET_TASKLISTS } from '../../core/graphql';

TaskList.propTypes = {
  headerColor: PropTypes.string,
  id: PropTypes.string,
  moveLeft: PropTypes.func,
  moveRight: PropTypes.func,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })
  ),
  title: PropTypes.string
};

TaskList.defaultProps = {
  headerColor: '#333'
};

function TaskList({ tasks, title, moveLeft, moveRight, ...props }) {
  const addTask = useMutation(ADD_TASK);

  function handleAddTask() {
    const result = window.prompt('Add a new task');
    if (!result) {
      return null;
    }
    addTask({
      variables: {
        data: {
          taskList: {
            connect: { id: props.id }
          },
          text: result
        }
      },
      /*eslint sort-keys: off */
      update: (proxy, { data: { createTask } }) => {
        const data = proxy.readQuery({ query: GET_TASKLISTS });
        const updatedList = data.taskLists.map(list => {
          if (list.id === props.id) {
            return {
              ...list,
              tasks: list.tasks.concat(createTask)
            };
          }
          return list;
        });

        proxy.writeData({
          data: Object.assign({}, data, {
            taskLists: updatedList
          }),
          query: GET_TASKLISTS
        });
      }
    });
  }

  return (
    <TaskListWrapper>
      <TaskListHeader {...props}>{title}</TaskListHeader>
      <BigButton onClick={handleAddTask}>Add Task</BigButton>
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          owner={title}
          moveLeft={moveLeft}
          moveRight={moveRight}
        >
          {task.text}
        </Task>
      ))}
    </TaskListWrapper>
  );
}

export default TaskList;

const TaskListWrapper = props => (
  <div className={styles.tasklistCustom} {...props}>
    {props.children}
  </div>
);

const TaskListHeader = ({ children, headerColor, ...props }) => (
  <div
    className="pa2 mb2 tc white"
    style={{
      backgroundColor: headerColor
    }}
    {...props}
  >
    {children}
  </div>
);
