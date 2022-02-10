function myFunction() {
    let inputVal = document.getElementById("empl").value.toLowerCase();
    let myUl = document.querySelectorAll(".myli");
    for(let i = 0; i < myUl.length; i++){
        if (!inputVal || myUl[i].innerHTML.toLowerCase().indexOf(inputVal) > -1) {
            myUl[i].style['display'] = 'flex';
        }
        else {
            myUl[i].style['display'] = 'none';
        }
    }
}