import React from 'react';
import TaskList from '../tasklist';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { GET_TASKLISTS, UPDATE_TASK } from '../../core/graphql/';

function Board() {
  const moveTask = useMutation(UPDATE_TASK);
  const { data, error } = useQuery(GET_TASKLISTS);

  if (error) {
    return `Error! ${error.message}`;
  }

  const { taskLists } = data;

  const handleMoveMutation = ({ newList }) => taskId => {
    moveTask({
      update: (proxy, { data: { updateTask } }) => {
        const cacheData = proxy.readQuery({
          query: GET_TASKLISTS
        });
        const updatedList = cacheData.taskLists.map(list => {
          return {
            ...list,
            tasks: list.tasks.filter(task => task.id !== taskId)
          };
        });
        const res = Object.assign({}, cacheData, {
          taskLists: updatedList.map(list => {
            if (list.id === newList) {
              list.tasks.push(updateTask);
            }
            return list;
          })
        });
        proxy.writeData({
          data: {
            res
          },
          query: GET_TASKLISTS
        });
      },
      variables: {
        data: {
          taskList: {
            connect: {
              id: newList
            }
          }
        },
        where: { id: taskId }
      }
    });
  };

  return (
    <div className="flex w-100">
      {taskLists.map((list, index) => {
        const isFirst = index === 0;
        const isLast = index === taskLists.length - 1;
        return (
          <TaskList
            key={list.id}
            title={list.title}
            {...list}
            moveLeft={
              isFirst
                ? null
                : handleMoveMutation({
                    newList: taskLists[index - 1].id
                  })
            }
            moveRight={
              isLast
                ? null
                : handleMoveMutation({
                    newList: taskLists[index + 1].id
                  })
            }
          />
        );
      })}
    </div>
  );
}

export default Board;
