const todo = document.getElementById('scroll');

axios.get("https://api.vschool.io/kyle/todo")
    .then(response => {
        
        
        for(let i = 0; i < response.data.length; i++){
            const acheOne = document.createElement('h1');
            acheOne.textContent= response.data[i].title
            console.log(acheOne)
            todo.appendChild(acheOne)
            // birthTodo(todo);
        }
    })
    .catch(error => console.log(error))

function birthTodo(todol) {
    // const divv = document.createElement('div');
    
    // const delButt = document.createElement('button');

    
    acheOne.className = 'acheOne'
    // delButt.textContent = 'ERASE ME UwU'

    
    // todo.appendChild(divv)
    // divv.appendChild(acheOne)
    // divv.appendChild(delButt)
    
    // delButt.addEventListener('click', (e) => {
    //     console.dir(e.target)
    //     parent.removeChild()
    // })
}
