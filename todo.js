const todos=[{
    id:1,
    todoItem:"Buy groceries for next week",
    status:true
},
{
    id:2,
    todoItem:"Renew car insurance",
    status:true
},
{
    id:3,
    todoItem:"Signup for online courses",
    status:false
}
]

const tbody=document.querySelector('tbody')
const form=document.querySelector('form')
const input=document.querySelector('input')
const renderTodos=()=>{
    tbody.innerHTML=""
for(todo of todos){
    
    tbody.innerHTML=
tbody.innerHTML+
`
<tr  class=${todo.status?'':'finished'}>
<th scope="row">${todo.id}</th>
<td>${todo.todoItem}</td>
<td>
   ${todo.status?'<span class="in-progress">In Progress</span>':'<span class="complete">Complete</span>'}
</td>
<td>
    <button id=${todo.id} type="submit" class="btn btn-danger">Delete</button>
   ${todo.status?'<button type="submit" class="btn btn-success ms-1">Finished</button>':""} 
</td>
</tr>
`
}
}

renderTodos()
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("hi")
    todos.push({
        id:todos[todos.length-1].id+1,
        todoItem:input.value,
        status:true
    })
    input.value=""
    renderTodos()
})







