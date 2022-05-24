const todoList = document.getElementById('scroll');
const delButtt = document.getElementById('delButt')



function birthTodo(todo){
    // console.log(`hopefully this ${todo} is showing`)
    // create/select the element
    for(let i = 0; i < todo.length; i++){
    const acheOne = document.createElement('h1')
    const divv = document.createElement("div")
    divv.id = todo._id
    const myEdit = document.createElement('button')
    const myDel = document.createElement('button')
    const imgD = document.createElement('img')
    const checkMe = document.createElement('input')
    checkMe.id = todo._id
    const titleInfo = todo.title
    const priceInfo = todo.price
    const isCompleted = todo.completed
    const desInfo = todo.description
    // edit element
    acheOne.textContent = `TITLE:  ${titleInfo} PRICE: ${priceInfo} DESCRIPTION: ${desInfo}`
    acheOne.setAttribute('class', 'acheOne')
    myEdit.setAttribute('class', 'editButt')
    myDel.textContent = "Erase me UwU"
    myDel.setAttribute('class', 'delButt')
    myEdit.textContent = "Edit me UwU"
    checkMe.setAttribute("type", "checkbox")
    checkMe.setAttribute("class", "chex")
    myDel.setAttribute('class', 'delButt')
    myDel.textContent = 'Erase Me UwU'
    // checkMe.setAttribute("onClick", "changeMe()")

    // append
    todoList.appendChild(divv)
    divv.appendChild(checkMe)
    divv.appendChild(acheOne)
    divv.appendChild(myDel)
    divv.appendChild(myEdit)
    //consider reloading page here for checkbox
    // console.log(`what is ${checkMe}`)
    checkMe.addEventListener("change", () => {
        todoList.textContent = ""
        for(let i = 0; i < todo.length; i++){
            if(isCompleted){
            axios.put(`https://api.vschool.io/kyle/todo/${todo._id}`, {
                    completed: "false"
            })
            
            .then(response => birthTodo(response.data[i]))
            .catch(error => console.log(error))
            acheOne.style.textDecoration = 'none'
        }  else {
            axios.put(`https://api.vschool.io/kyle/todo/${todo._id}`, {
                completed: "true"
            })
            
            .then(response => birthTodo(response.data[i]))
            .catch(error => console.log(error))
            acheOne.style.textDecoration = 'line-through'
        }
        
        }
    })
    myDel.addEventListener("click", (e)=>{
        console.dir(e.target)
        divv.removeChild(acheOne)
        divv.removeChild(myEdit)
        divv.removeChild(myDel)
        divv.removeChild(checkMe)
    })
    myDel.addEventListener("click", () => {
        console.log('I am in del function!')
        console.log(todo._id)
        axios.delete(`https://api.vschool.io/kyle/todo/${todo._id}`)
            .then(response => birthTodo(response.data))
            .catch(error => console.log(error))
    })    
    
    //add checkbox if strikethrough then also add strike. checkbox onchange function(put to database need id for object)
    //call get again here?
    if(isCompleted === true) {
        acheOne.style.textDecoration = 'line-through';
        // console.log(`${fish} is true!`);
    } 
    if(todo.imgUrl){
        // console.log('does have image')
        imgD.setAttribute('class', 'imgJSON')
        imgD.setAttribute('src', todo.imgUrl)
        acheOne.appendChild(imgD)
    } else {
        // console.log('does not have image')
        imgD.setAttribute('class', 'imgJSON');
        imgD.setAttribute('src', 'https://thumbs.dreamstime.com/z/nope-concept-vintage-wooden-letterpress-type-word-written-wood-rustic-background-178547404.jpg')
        acheOne.appendChild(imgD);
    }
}
}

// function changeMe(todo){
//     if(todo.completed){

//     }
// }


axios.get("https://api.vschool.io/kyle/todo")
    .then(response =>  {
        birthTodo(response.data)
    })
    .catch(error => console.log(error))

const todoForm = document.todoForm

todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    const addNew = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.price.value
    }
    axios.post("https://api.vschool.io/kyle/todo/", addNew)
        .then(response => birthTodo(response.data))
        .catch(error => console.log(error))
})

