"use client"
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const init = [
  { id: '1', content: 'First' },
  { id: '2', content: 'Second' },
  { id: '3', content: 'Third' },
  { id: '4', content: 'Fourth' },
  { id: '5', content: 'Fifth' },
  { id: '6', content: 'Sixth' },
  { id: '7', content: 'Seventh' },
];




const CreateForm = () => {
  const [todos, setTodos] = useState(init);

  return (
    <main>
      <h1>Create Form</h1>
      <DragDropContext onDragEnd={() => { console.log("hi") }}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="space-y-5 w-1/2 m-auto grid gap-2 bg-blue-100"
            >
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-blue-300 p-4"
                    >
                      {todo.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
};

export default CreateForm;
