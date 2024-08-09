let btn = document.querySelector(".create");
let input = document.querySelector(".taskinput");
let list =  document.querySelector(".tasklist");
btn.onclick = () =>{
let el=document.createElement("li");
let text = input.value;
el.innerHTML=text;
list.appendChild(el);
let cancel=document.createElement("SPAN");
cancel.innerHTML="\u00d7";
el.append(cancel);

}
list.onclick = (e) =>{
   if( e.target.tagName ==="LI"){
e.target.classList.toggle("checked");
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}





