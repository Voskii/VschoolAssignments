const todo = document.getElementById('scroll');
const dadBod = document.getElementById('bod');
const myEdit = document.createElement('button');
const myDel = document.createElement('button');

axios.get("https://api.vschool.io/kyle/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const acheOne = document.createElement('h1');
            const imgD = document.createElement('img');
            const fish = response.data[i];
            // const taco = JSON.stringify(fish);
            // // acheOne.textContent = taco;
            console.log(acheOne);
            todo.appendChild(acheOne);
            const isCompleted = fish.completed;
            console.log(fish.imgUrl)
            if(isCompleted === true) {
                acheOne.style.textDecoration = 'line-through';
                // console.log(`${fish} is true!`);
            } 
            if(fish.imgUrl){
                // console.log('does have image')
                imgD.setAttribute('class', 'imgJSON')
                imgD.setAttribute('src', fish.imgUrl)
                
                myDel.setAttribute('class', 'delButt')
                myDel.textContent = 'Erase Me UwU'
                todo.appendChild(imgD);
                // todo.appendChild(myDel)
            } else {
                // console.log('does not have image')
                imgD
                imgD.setAttribute('class', 'imgJSON');
                imgD.setAttribute('src', 'https://thumbs.dreamstime.com/z/nope-concept-vintage-wooden-letterpress-type-word-written-wood-rustic-background-178547404.jpg')
                todo.appendChild(imgD);
                
                myDel.setAttribute('class', 'delButt')
                myDel.textContent = 'Erase Me UwU'
                dadBod.appendChild(myDel);
            }
        }
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
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})

const delMe = {
    title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todo.Form.price.value
}

const delMee = {

}

axios.delete("https://api.vschool.io/kyle/todo/", delMe)
    .then(response => console.log(response))
    .catch(error => console.log(error))


    
// function birthTodo(todol) {
//     // const divv = document.createElement('div');
    
//     // const delButt = document.createElement('button');

    
//     acheOne.className = 'acheOne'
//     // delButt.textContent = ''

    
//     // todo.appendChild(divv)
//     // divv.appendChild(acheOne)
//     // divv.appendChild(delButt)
    
//     // delButt.addEventListener('click', (e) => {
//     //     console.dir(e.target)
//     //     parent.removeChild()
//     // })
// }
