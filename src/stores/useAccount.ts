import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface Account {
  id: number;
  content: string;
  money: number;
  isPay: string;
}

export const useAccountStore = defineStore(
  "account",
  () => {
    const accounts = ref<Account[]>([]);
    const income = ref<number>(0);
    const expenses = ref<number>(0);
    const balance = computed((): number => {
      return income.value - expenses.value;
    });

    const addAccount = (
      accountText: string,
      accountMoney: number,
      accountIsPay: string
    ) => {
      //定义一个等待添加的待办事项
      const newAccount: Account = {
        id: Date.now(),
        content: accountText,
        money: accountMoney,
        isPay: accountIsPay,
      };

      accounts.value.push(newAccount);
    };

    const removeAccount = (index: number) => {
      accounts.value.splice(index, 1);
    };

    const compute = () => {
        income.value = 0;
        expenses.value = 0;
      accounts.value.forEach((e) => {
        if (e.isPay === "income") {
          income.value = income.value + e.money;
        } else {
          expenses.value = expenses.value + e.money;
        }
      });
    };

    return {
      accounts,
      income,
      expenses,
      balance,
      addAccount,
      removeAccount,
      compute,
    };
  },

  {
    persist: {
      key: "my-account-store",
      storage: localStorage,
    },
  }
);
