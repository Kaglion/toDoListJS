const form = document.querySelector('form')
const input = document.querySelector('form input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
let allTask = [];

form.addEventListener('submit', e => {
    e.preventDefault();
    const txt = input.value.trim();
    if (txt !== '') {
        createTask(txt)
        input.value = '';
    }
})

function createTask(txt) {
    const todo = {
        txt,
        id : Date.now() //return the number of milliseconds since 1970
    }
    displayList(todo)
}

function displayList(todo){
    const item = document.createElement("li");
    item.setAttribute("data-key", todo.id);

    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    input.addEventListener('click', taskExecute);
    item.appendChild(input)

    const txt = document.createElement('span')
    txt.innerText = todo.txt;
    item.appendChild(txt);

    const btn = document.createElement('button');
    btn.addEventListener('click', deleteTask);
    const img = document.createElement('img');
    img.setAttribute('src', 'ressources/close.svg');
    btn.appendChild(img)
    item.appendChild(btn);

    list.appendChild(item);
    allTask.push(item)


}

function taskExecute(e) {
    e.target.parentNode.classList.toggle('finDeTache')
}

function deleteTask(e) {
 
    allTask.forEach( (el) => {
     if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key') ){
        el.remove()
        allTask = allTask.filter(li => li.dataset.key !== el.dataset.key);
     }
    })
}
 