<template>
    <div>
        <h1>记账应用</h1>
        <input type="text" v-model="newText" placeholder="描述">
        <input type="text" v-model="newMoney" placeholder="金额">
        <select name="isPay" v-model="newIspay">
            <option value="income">收入</option>
            <option value="expenses">支出</option>
        </select>
        <button @click="myAdd">添加记录</button>
    </div>
    <ul>
        <h2>交易记录</h2>
        <li v-for="(account, index) in myAccounts" :key="account.id">
            <span>{{ account.content }} - {{ account.money }} ({{ account.isPay }})</span>
            <button @click="myRemove(index)">删除</button>
        </li>
    </ul>
    <div>
        <h2>统计信息</h2>
        <p>总收入: {{ accountStore.income }}</p>
        <p>总支出: {{ accountStore.expenses }}</p>
        <p>余额: {{ accountStore.balance }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue';
import { useAccountStore } from '../stores/useAccount';

const accountStore = useAccountStore();

const newText = ref("");
const newMoney = ref("");
const newIspay = ref("income")

const myAdd = () => {
    if (newText.value.trim()) {
        accountStore.addAccount(newText.value, (Number)(newMoney.value), newIspay.value);
        accountStore.compute();
        newMoney.value = ""; //清空输入框
        newText.value = "";
    };
};

const myRemove = (index: number) => {
    accountStore.removeAccount(index);
    accountStore.compute();
};

const myAccounts = accountStore.accounts;
</script>

<style scoped></style>