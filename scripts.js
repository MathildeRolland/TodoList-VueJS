var list = [];

const Todolist = {
    data() {
        return {
            list: list,
            newTask: ''
        }
    },
    methods: {
        addNewTask: function() {
            if(this.newTask) {
                this.list.push(this.newTask);
                this.newTask = '';
            }
        }
    }
};

Vue.createApp(Todolist).mount('#app');