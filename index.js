// Import stylesheets
import './style.css';

let newTask = document.getElementById("add-task")

newTask.addEventListener( "submit" , (e)=>{
    e.preventDefault()

    const task = document.getElementById("list-item").value
    const node = document.createElement("li");
    node.style.padding = '5px'
    // const textnode = document.createTextNode(task);
    if(task.length!=0){
      node.innerHTML += `<input type="checkbox" id="${document.getElementById("pending-list").childElementCount}">${task}`

      console.log(document.getElementById("pending-list").childElementCount)
      node.id = `${document.getElementById("pending-list").childElementCount}`
      document.getElementById("pending-list").appendChild(node)
    }

}
)
let removeTask = document.getElementById("pending-list")

removeTask.addEventListener( "change" , (e)=>{

  console.log(e.target.id)
  //adding in the list
  const task = document.getElementById(e.target.id).innerText
  console.log(task)
  const node = document.createElement("li");
  node.style.padding = '5px'
  const textnode = document.createTextNode(task);
  node.innerHTML += `${task}`
    document.getElementById("completed-list").appendChild(node)

    let toBeRemoved = document.getElementById(e.target.id)
    document.getElementById("pending-list").removeChild(toBeRemoved)

}
)

