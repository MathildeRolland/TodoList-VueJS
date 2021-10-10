var list = [];

const Todolist = {
    data() {
        return {
            list: list,
            newTask: {
                name: '',
                done: false
            }
        }
    },
    methods: {
        addNewTask: function() {
            if(this.newTask.name) {
                this.list.push(this.newTask);
                this.newTask = {
                    name: '',
                    done: false,
                }
            }
        },
    }
};

Vue.createApp(Todolist).mount('#app');