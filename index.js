let count = 0;

let countEl = document.getElementById("count-el");
let dispalyEl = document.getElementById("dispaly-el");

function increment()
{
    count+=1;
    countEl.textContent=count;
}

function save()
{
    let message = " " + count + " - ";
    dispalyEl.textContent+=message;
    countEl.textContent = 0;
    count = 0;
}