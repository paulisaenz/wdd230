const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');

    listItem.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.addEventListener('click', function() {
    list.removeChild(listItem);
    });

    input.focus();
});