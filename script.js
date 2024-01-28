function validateCard() {
  const cardNumberInput = document.getElementById('cardNumber');
  const resultElement = document.getElementById('result');

  const cardNumber = cardNumberInput.value.replace(/\s/g, ''); // Remover espaços em branco

  if (isValidCard(cardNumber)) {
    resultElement.textContent = 'Cartão válido!';
    resultElement.style.color = 'green';
  } else {
    resultElement.textContent = 'Cartão inválido. Por favor, verifique o número.';
    resultElement.style.color = 'red';
  }
}

function isValidCard(cardNumber) {
  const digits = cardNumber.split('').map(Number);
  const reversedDigits = digits.reverse();

  for (let i = 1; i < reversedDigits.length; i += 2) {
    reversedDigits[i] *= 2;
    if (reversedDigits[i] > 9) {
      reversedDigits[i] -= 9;
    }
  }

  const sum = reversedDigits.reduce((acc, digit) => acc + digit, 0);
  return sum % 10 === 0;
}
