document.getElementById('parent').addEventListener('click',()=>{
    console.log('parent click');
})

document.getElementById('child').addEventListener('click',(event)=>{
    event.stopPropagation();
    console.log('child click');
})