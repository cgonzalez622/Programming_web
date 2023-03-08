const { createApp } = Vue;
createApp({
  data() {
    return {
      title: "Todo Items",
      newItem: "",
      newItemPriority: "low",
      todoItems: [
        {
          label: "deploy to server",
          id: 0,
          priority: "high",
        },
        {
          label: "review new projects",
          id: 1,
          priority: "medium",
        },
        {
          label: "create wireframes for x",
          id: 2,
          priority: "low",
        },
      ],
    };
  },
}).mount("#app");
