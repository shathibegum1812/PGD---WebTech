shownote();
let addnoteinput = document.getElementById("addnoteinput");
let addnotebtn = document.getElementById("addnotebtn");

addnotebtn.addEventListener("click", function(){
    addnoteinputval = addnoteinput.value;
    if(addnoteinputval.trim()!=0){
        let notedata = localStorage.getItem("items");
        if(notedata == null){
            notedataArray = [];
        }
        else{
            notedataArray = JSON.parse(notedata);
        }
        notedataArray.push({'task_name':addnoteinputval, 'completeStatus':false});
		localStorage.setItem("items", JSON.stringify(notedataArray));
        addnoteinput.value = '';
    }
    shownote();
})

// shownote
function shownote(){
    let notedata = localStorage.getItem("items");
    if(notedata == null){
        notedataArray = [];
    }
    else{
        notedataArray = JSON.parse(notedata);
    }
    let html = '';
    let addednotelist = document.getElementById("addednotelist");
    notedataArray.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `<tr>
                    ${taskCompleteValue}
					<td><button type="button" onclick="deleteitem(${index})" class="float-end btn btn-outline-danger"></i>Delete</button></td>
					                   
                </tr>`;
    });
    addednotelist.innerHTML = html;
}


// deleteitem
function deleteitem(index){
    let notedata = localStorage.getItem("items");
    let notedataArray = JSON.parse(notedata);
    notedataArray.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(notedataArray));
    shownote();
}


// deleteall
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    let addnotebtn = document.getElementById("addnotebtn");
    let notedata = localStorage.getItem("items");
    let notedataArray = JSON.parse(notedata);
    if(notedata == null){
        notedataArray = [];
    }
    else{
        notedataArray = JSON.parse(notedata);
        notedataArray = [];
    }   
    localStorage.setItem("items", JSON.stringify(notedataArray));
    shownote();

})













