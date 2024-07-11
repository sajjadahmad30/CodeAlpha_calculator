document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                displayValue = '';
            } else if (value === '=') {
                try {
                    displayValue = eval(displayValue);
                } catch {
                    displayValue = 'Error';
                }
            } else {
                displayValue += value;
            }

            display.value = displayValue;
        });
    });
});
