let list = document.querySelector('ul');
let days = ['Monday', 'Tuesday', 'Wedsnesday', 'Thursday', 'Friday', 'Saturday'];

for (each_day of days) {
    let li = document.createElement('li');
    li.textContent = each_day;
    list.append(li);
}
