const passwordDisplay = document.getElementById('password-display');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbersChars = '0123456789';
const symbolsChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

function generatePassword() {
    const length = lengthInput.value;
    let charset = '';
    let password = '';

    if (uppercaseCheckbox.checked) charset += uppercaseChars;
    if (lowercaseCheckbox.checked) charset += lowercaseChars;
    if (numbersCheckbox.checked) charset += numbersChars;
    if (symbolsCheckbox.checked) charset += symbolsChars;

    if (charset === '') {
        alert('Пожалуйста, выберите хотя бы один тип символов!');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordDisplay.value = password;
}

function copyPassword() {
    if (passwordDisplay.value) {
        passwordDisplay.select();
        passwordDisplay.setSelectionRange(0, 99999); // Для мобильных
        document.execCommand('copy');
        alert('Пароль скопирован в буфер обмена!');
    } else {
        alert('Нет пароля для копирования!');
    }
}
