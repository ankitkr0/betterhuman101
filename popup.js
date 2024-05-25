document.getElementById('onboarding-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const goals = document.getElementById('goals').value;
    const habits = document.getElementById('habits').value;
  
    console.log('Form submitted:', { name, goals, habits });
  
    // Show loading indicator
    const submitButton = event.target.querySelector('button');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
  
    chrome.storage.sync.set({ name, goals, habits }, function() {
      console.log('User data saved:', { name, goals, habits });
      // Hide loading indicator
      submitButton.disabled = false;
      submitButton.textContent = 'Submit';
    });
  });