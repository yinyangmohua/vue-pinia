<template>
    <div>
        <h2>待办清单</h2>
        <input type="text" v-model="newTodoText" placeholder="请输入新的待办事项" />
        <button @click="myAddTodo">添加</button>
    </div>

    <ul>
        <li v-for="(todo, index) in myTodos" :key="todo.id">
            <span @click="myToggleTodo(index)" :class="{ completed: todo.completed }">{{ todo.text }}</span>
            <button @click="myRemoveTodo(index)">删除</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '../stores/useTodo';

const todoStore = useTodoStore();

const newTodoText = ref("");

const myAddTodo = () => {
    if(newTodoText.value.trim()) {
        todoStore.addTodo(newTodoText.value);
        newTodoText.value = ""; //清空输入框
    };
};

const myRemoveTodo = (index: number) => {
    todoStore.removeTodo(index);
};

const myToggleTodo = (index: number) => {
    todoStore.toggleTodo(index);
};

const myTodos = todoStore.todos;
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>