import { defineStore } from "pinia";
import { ref } from "vue";

//定义数据类型

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

//定义store 组合式api

export const useTodoStore = defineStore('todo' , () => {
    const todos = ref<Todo[]>([]);

    //添加待办事项

    const addTodo = (todoText: string) => {

        //定义一个等待添加的待办事项
         const newTodo: Todo = {
            id: Date.now(),
            text: todoText,
            completed: false,
         };

         todos.value.push(newTodo)

    };


    const removeTodo = (index:number) => {
        todos.value.splice(index, 1);

    };

    //切换状态
    const toggleTodo = (index:number) => {
        if(todos.value[index]){
            todos.value[index].completed = !todos.value[index].completed;
        }
    };

    //返回Store定义所有
    return{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
    }
},
{
    persist: {
        key: 'my-todo-store',
        storage: localStorage,
    }
}
);