// Add an event listener to the form submission
document.querySelector('#question-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the form data
    const formData = new FormData(event.target);
    
    try {
      // Send an AJAX request to the server using fetch()
      const response = await fetch('api/setQuestionAmount.php', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        // If the response is successful, reload the page to reflect the updated $_SESSION['amount'] value
        window.location.reload();
      } else {
        throw new Error(`Failed to send form data: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
});
  
// Add a script to fetch and display the session variable value
fetch('api/getQuestionAmount.php')
    .then(response => response.text())
    .then(data => document.querySelector('#session-value').textContent = `Session value: ${data}`);
  