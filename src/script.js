function addTask() {
  var input= document.getElementById('input');
  var newTask=input.value;
  if(newTask!="") {
    var item=document.createElement('li');
    item.innerHTML='<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713"/>'+'<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715"/>'+'<input type="button" class="important" value="!" onclick="important(this.parentNode)"/>'+newTask;
    //add new item as part of existing list.
    document.getElementById('tasks').appendChild(item);
    /* step 4 below here */
    input.value="";
    input.placeholder="Enter next task...";
  }
}
//Change styling used for given item.
function markDone(item) {
  item.className='finished';
}
/* Step 7 beow here */
function remove(item) {
  //remove item completely from document
  if(item.className=='finished')
  item.remove();
}
function important(item) {
  item.className='important';
}
/* Step 11 below here */
function doAbout() {
  var about= document.getElementById('divabout');
  about.innerHTML="The author is Gopika Shaji."
  about.className='aboutcolor';
}
/* Step 14 below here */
function clearAbout() {
  var c= document.getElementById('divabout');
  c.innerHTML="";
}