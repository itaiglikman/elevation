const btn = document.getElementById('submitBtn');
let errMsgArr = [];
const msgArea = document.getElementById('msg');

btn.addEventListener('click', () => {
    validateForm()
});

function validateForm() {
    errMsgArr = [];

    const nameInput = document.getElementById('nameInput');
    const userName = nameInput.value;
    const salaryInput = document.getElementById('salaryInput');
    const salary = salaryInput.value;
    const birthdayInput = document.getElementById('birthdayInput');
    const birthday = birthdayInput.value;
    const phoneInput = document.getElementById('phoneInput');
    const phone = phoneInput.value;

    validateAll(validateName(userName), validateSalary(salary), validateBirthday(birthday), validatePhone(phone));
console.log(errMsgArr);
    if (errMsgArr.length === 0) {
        msgArea.setAttribute('class', 'success');
        msgArea.innerText = 'successful submission!'
    } else {
        msgArea.setAttribute('class', 'error');
        msgArea.innerText = errMsgArr;

    }
}

function validateAll(userName, salary, birthday, phone) {
    const arr = [...arguments];
    arr.forEach(item => {
        console.log(item);
        if (item !== '' || item!==undefined) errMsgArr.push(item);
    });
}

function validateName(userName) {
    if (!userName) return 'name not sent';
    if (userName.length < 1) return 'name must be at least 2 chars';
}

function validateSalary(salary) {
    if (!salary) return 'salary not sent';
    salary = parseInt(salary);
    if (10000 >= salary || salary >= 16000) return 'salary must be between 10,000 to 16,000';
}

function validateBirthday(birthday) {
    if (!birthday || birthday === null) return 'birthday not sent';
}

function validatePhone(phone) {
    if (!phone) return 'phone not sent';
    if (phone.length < 3) return 'phone number must be 10 digits long';
}