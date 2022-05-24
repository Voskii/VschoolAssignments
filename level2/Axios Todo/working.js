//running

const todoList = document.getElementById('scroll')
const delButtt = document.getElementById('delButt')

function axGetCall (){
    axios.get("https://api.vschool.io/kyle/todo")
    .then(response =>  {
        for(let i = 0; i < response.data.length; i++){
            birthTodo(response.data[i])
            // console.log('main data' , response.data[i])
        }

        
    })
    .catch(error => console.log(error))
}

axGetCall();

function birthTodo(todo){
    // console.log(`hopefully this ${todo} is showing`)
    // create/select the element
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
    divv.appendChild(acheOne)
    divv.appendChild(checkMe)
    divv.appendChild(myDel)
    divv.appendChild(myEdit)
    
    // console.log(`what is ${checkMe}`)

    if(isCompleted) {
        acheOne.style.textDecoration = 'line-through';
        checkMe.checked = true;
    } else {
        acheOne.style.textDecoration = 'none';
        checkMe.checked = false;
    } 

    if(todo.imgUrl) {
        // console.log('does have image')
        imgD.setAttribute('class', 'imgJSON')
        imgD.setAttribute('src', todo.imgUrl)
        divv.appendChild(imgD)
    } else {
        // console.log('does not have image')
        imgD.setAttribute('class', 'imgJSON');
        imgD.setAttribute('src', 'https://thumbs.dreamstime.com/z/nope-concept-vintage-wooden-letterpress-type-word-written-wood-rustic-background-178547404.jpg')
        divv.appendChild(imgD);
    }

    checkMe.addEventListener("change", () => {
        
        if(!checkMe.checked){
            acheOne.style.textDecoration = 'none';
            console.log('in isCompleted if as true')
            axios.put(`https://api.vschool.io/kyle/todo/${todo._id}`, {
                    completed: "false"
            })
            
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
            
        }  else {
            acheOne.style.textDecoration = 'line-through';
            console.log('in isCompleted if as false')
            axios.put(`https://api.vschool.io/kyle/todo/${todo._id}`, {
                completed: "true"
            })
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
            
        }
    
    })

    myDel.addEventListener("click", (e)=>{
        
        // parent.removeChild(divv);
        console.dir(e.target)
        
        console.log('I am in FIRST del function!')
        
        axios.delete(`https://api.vschool.io/kyle/todo/${todo._id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        console.log('after the axios del call')
        divv.innerHTML = ''
    })
    // myDel.addEventListener("click", () => {
    //     console.log('I am in second del function!')
    //     console.log(todo._id)
    //     divv.removeChild(myEdit)
    //     divv.removeChild(myDel)
    //     divv.removeChild(checkMe)
    //     divv.removeChild(imgD)
    //     divv.removeChild(acheOne)
        
    //     divv.innerHTML = ''
    // })
    
}

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