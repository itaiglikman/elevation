(() => {
    
    console.log(document.getElementById('myDiv'));

    // css like selector - get the first element with this class in body
    console.log(document.querySelector('body > .pick-me'));

    // returns arr to all elements with this class in body
    console.log(document.querySelectorAll('body > .pick-me'));


    const myP = document.querySelector('#myP');
    const myA = document.querySelector('#myA');
    const myDiv = document.getElementById('myDiv');


    // update  element tags and text
    setTimeout(() => {
        myP.innerHTML = '<span>hello js</span>';
        // myP.innerText = '<span>hello js</span>';
    }, 2000);

    // update element attributes
    setTimeout(() => {
        // myA.href='https:/www.google.com';
        myA.setAttribute('href', 'https:/www.walla.com')
        myA.innerText = 'go to walla';
    }, 2000);

    // update element style
    setTimeout(() => {
        myP.style.color = 'green';
        // myP.style["font-size"] = '20px';
        myP.style.fontSize = '20px';
        // myP.style.cssText = 'font-size:20px; color: green';
    }, 2000);

    // update element style using classes
    // setTimeout(() => {
    //     myDiv.classList.add('hide');
    // }, 2000);
    // setTimeout(() => {
    //     myDiv.classList.remove('hide');
    // }, 4000);

    function showAlert() {
        alert('this fn was invoked')
    }

    function changePContent() {
        const myP2 = document.getElementById('myP2');
        myP2.innerHTML = 'not the same content';
    }


    // attaching an event handler to an element

    document.getElementById('btnHandler').addEventListener('click', () => {
        document.getElementById('pHandler').innerHTML = "changed with event";
    });

})();