function searchDuckDuckGo(query) {
  const apiKey = '421a10a440615a4ccea08d6d4cadb8541608ace6749fca6ea32305278fabf77f'; // Replace 'YOUR_NEW_API_KEY' with your actual API key
  const apiUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&apiKey=${apiKey}`;

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract and return the relevant information from the API response
      const results = data.AbstractText;
      // Process and display the results as desired

      return results;
    })
    .catch(error => {
      console.error('Error:', error);
      return null;
    });
}

// Function to handle the user's query and perform the search
function talk() {
  const userQueryInput = document.getElementById('userbox');
  const userQuery = userQueryInput.value;

  searchDuckDuckGo(userQuery)
    .then(response => {
      if (response) {
        if (response === '') {
          console.log("Sorry, I couldn't find any relevant information.");
          const chatlog = document.getElementById('chatLog');
          chatlog.textContent = "Sorry, I couldn't find any relevant information.";
        } else {
          console.log(response);
          const chatlog = document.getElementById('chatLog');
          chatlog.textContent = response; // Update the chatlog with the response
        }
      } else {
        console.log("Sorry, there was an error retrieving information.");
        const chatlog = document.getElementById('chatLog');
        chatlog.textContent = "Sorry, there was an error retrieving information.";
      }
    });
}
