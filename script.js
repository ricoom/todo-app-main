const _todo=document.getElementById('add_td')
const tods=document.getElementById('myTodos')
let completed=[]

let todos=[{
    id:"1",
    name:"take food",
    date:"6-05-2023",
    complete:false},
{
    id:"2",
    name:"work out",
    date:"7-05-2023",
    complete:true}];

let i=todos.length

window.onload=allTodos()

function allTodos() {
    todos.forEach(todo => {


        tods.insertAdjacentHTML('afterbegin',
`
<div class="card" >
<input type="checkbox" onchange="markDone(this)" name=""  id="checkTodo"> 
 <span> ${todo.name}</span
  </div>
 
`)
if(todo.complete){
    document.getElementById('checkTodo').checked=true;
    completed.push(todo)
}
    }
    
    
    );
   document.getElementById('done').innerText='completed '+completed.length
}

function markDone($event){
    if($event.checked==true){
        completed.push($event)
        // $event.checked
        document.getElementById('done').innerText='completed '+completed.length
    }else{
        completed.shift($event)
        // $event.checked
        document.getElementById('done').innerText='completed '+completed.length
    }
   
    console.log(completed)
}

function addTodo(){
    const todoObj={ 
        id:"1",
    name:_todo.value,
    date:"6-05-2023",
    complete:false}

todos.push(todoObj);

tods.insertAdjacentHTML('afterbegin',
`
<div class="card" >
<input type="checkbox" onchange="markDone(this)" name=""  id="checkTodo"> 
  <span>${todos[i].name}</span>
  </div>
 
`)
console.log(todos[i])
}
_todo.addEventListener('keyup',({key})=>{
    if (key==="Enter") {
        addTodo();
        i++
        _todo.value=""
        console.log('enterd')
    }
})
