const tbody=document.querySelector("#table-body");

const btn=document.getElementById("submit-button")


btn.addEventListener("click", function(event) {
    let title=document.getElementById("mtitle").value;
    let cost=document.getElementById("mcost").value;

    let row = document.createElement('tr');
    row.innerHTML = `<td>${title}</td>
                    <td>${cost}</td>
                    <td><button class="btn btn-danger">Remove</button></td>`

    tbody.append(row);

    let remove = row.querySelector('button');
    remove.addEventListener('click', function(e){
        this.parentNode.parentNode.remove();
        updateTotal()
        e.preventDefault()
    })


    event.preventDefault();
    updateTotal();
});

function updateTotal(){
    let rows = document.querySelectorAll('table tr')
    let total = 0
    for(let i=1 ;i<rows.length;i++){
        total += Number(rows[i].cells[1].innerText)    
    }

    let span=document.getElementById("total-cost");
    span.innerHTML=total;
}


