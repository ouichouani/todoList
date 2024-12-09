

const global_container = document.getElementsByClassName('global_container')[0] ;
const tasks_list = document.getElementsByClassName('tasks_list')[0] ;
const task = document.getElementsByClassName('task')[0] ;
const tasks_list_header = document.getElementsByClassName('tasks_list_header')[0] ;
const tasks_list_header_title = document.querySelectorAll('.tasks_list_header h1');
const task_disk = document.querySelectorAll('.task .disk');
const add_bar_input = document.getElementsByClassName('add_bar_input')[0] ;
const add_bar_button = document.getElementsByClassName('add_bar_button')[0] ;






function add_task_to_task_list(){
    
    if(!add_bar_input.value.trim()){
        return;
    }
    tasks_list.innerHTML += `
                <div class="task">
                <div class="disk"></div>
                <p>${add_bar_input.value.trim()}</p>
                <p> &lt; </p>
                </div> ` ;
    add_bar_input.value = ''


}

















