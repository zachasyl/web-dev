import TodoList from "./TodoList.js";


// without todolist, injector appends the 2do example to the html page
// it can also append the 2do example AND the todolist{} which is a function
// that returns content.

// if we want to add more content we can make funcrtions aside from todo list and
// add them below
$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>

         ${TodoList()}

    </div>
`);
