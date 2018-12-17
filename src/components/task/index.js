import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text';
import { useMutation } from 'react-apollo-hooks';
import { DELETE_TASK, GET_TASKLISTS } from '../../core/graphql';
import { TinyButton } from '../button';

Task.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  moveLeft: PropTypes.func,
  moveRight: PropTypes.func
};

function Task({ children, id, moveLeft, moveRight }) {
  const deleteTask = useMutation(DELETE_TASK);

  function handleDeleteTask() {
    deleteTask({
      variables: {
        where: {
          id: id
        }
      },
      /* eslint sort-keys: off */
      /* eslint no-shadow: off */
      update: (proxy, { data: { deleteTask } }) => {
        const data = proxy.readQuery({ query: GET_TASKLISTS });
        const updatedList = data.taskLists.map(list => {
          return {
            ...list,
            tasks: list.tasks.filter(
              task => task.id !== deleteTask.id
            )
          };
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
    <TaskWrapper>
      <TaskContent>
        <Text>{children}</Text>
      </TaskContent>
      <TaskContent>
        {moveLeft && (
          <TinyButton onClick={() => moveLeft(id)}>
            &#8592;
          </TinyButton>
        )}
        <TinyButton onClick={handleDeleteTask}>delete</TinyButton>
        {moveRight && (
          <TinyButton onClick={() => moveRight(id)}>
            &#8594;
          </TinyButton>
        )}
      </TaskContent>
    </TaskWrapper>
  );
}

export default Task;

const TaskWrapper = props => (
  <div
    className="flex flex-column  mb3 ba b--light-silver br2"
    {...props}
  >
    {props.children}
  </div>
);

const TaskContent = props => (
  <div className="flex justify-between mh2 pa2" {...props}>
    {props.children}
  </div>
);
