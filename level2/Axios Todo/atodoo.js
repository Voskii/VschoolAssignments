const todo = document.getElementById('scroll');
const dadBod = document.getElementById('bod');

axios.get("https://api.vschool.io/kyle/todo")
    .then(response => {
        
        
        for(let i = 0; i < response.data.length; i++){
            const acheOne = document.createElement('h1');
            const imgD = document.createElement('img');
            const fish = response.data[i];
            const taco = JSON.stringify(fish);
            acheOne.textContent = taco;

            console.log(acheOne);
            todo.appendChild(acheOne);
            const isCompleted = fish.completed;
            console.log(fish.imgUrl)
            if(isCompleted === true) {
                acheOne.style.textDecoration = 'line-through';
                // console.log(`${fish} is true!`);
            } 
            if(fish.imgUrl){
                imgD.setAttribute('class', 'imgJSON');
                imgD.setAttribute('src', fish.imgUrl)
                dadBod.append(imgD);
                console.log(imgD)
            }
        }
    })
    .catch(error => console.log(error));

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
