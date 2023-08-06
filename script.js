const radioButtons = document.querySelectorAll('input[type="radio"][name="bundle"]');
const selectForms = document.querySelectorAll('.select');
const boxes = document.querySelectorAll('.box');
const totalPriceElement = document.getElementById('total-price');
let totalPrice = 0;
totalPriceElement.textContent = 'DKK ' + totalPrice;
radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('click', () => {
        selectForms.forEach((selectForm) => {
            selectForm.style.display = 'none';
        });
        selectForms[index].style.display = 'flex';
        totalPrice = parseInt(radioButtons[index].getAttribute('data-price'));
        totalPriceElement.textContent = 'DKK ' + totalPrice;

        // Add a class to the selected box and remove from others
        boxes.forEach((box) => {
            box.classList.remove('selected');
        });
        boxes[index].classList.add('selected');
    });
});