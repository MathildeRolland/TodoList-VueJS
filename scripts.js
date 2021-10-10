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
                localStorage.setItem("taskList", JSON.stringify(this.list));
            } else {
                alert("Some text is necessary");
            }
        },
        clearAll: function() {
            this.list = [];
        }
    },
    created: function() {
        this.list = localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")) : this.list;
    }
};

Vue.createApp(Todolist).mount('#app');