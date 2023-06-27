const numberButttons = document.querySelectorAll('.numbers button');
const submitButton = document.getElementById('btn');
const ratingState = document.getElementById('rating-state');
const thankState = document.getElementById('thank-state');
const finalRating = document.querySelector('.final-rating');


const numberButtonsLength = numberButttons.length;

// here adding event listener to the number buttons
for (let i = 0; i < numberButtonsLength; i++) {
  const button = numberButttons[i];
  button.addEventListener('click', function() {
    for (let j = 0; j < numberButtonsLength; j++) {
      const btn = numberButttons[j];
      btn.classList.remove('select');
    }
    this.classList.add('select');
  });
}


// adding an event listener to the submit button
submitButton.addEventListener('click', function() {
  let selectedButton;
  for (let i = 0; i < numberButtonsLength; i++) {
    if (numberButttons[i].classList.contains('select')) {
      selectedButton = numberButttons[i];
      break;
    }
  }

  if (selectedButton) {
    const selectedNumber = selectedButton.textContent;
    ratingState.style.display = 'none';
    thankState.style.display = 'block';
    finalRating.textContent = `You selected ${selectedNumber} out of 5`;

    // after 7 seconds it get to old section
    setTimeout(function() {
      ratingState.style.display = 'block';
      thankState.style.display = 'none';
      for (let i = 0; i < numberButtonsLength; i++) {
        numberButttons[i].classList.remove('select');
      }
    }, 7000);
  }
});


