document.getElementById('submit-tool-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from refreshing the page
  
    // Collect form data
    const toolData = {
      toolName: document.getElementById('toolName').value,
      category: document.getElementById('category').value,
      websiteUrl: document.getElementById('websiteUrl').value,
      shortDescription: document.getElementById('shortDescription').value,
      longDescription: document.getElementById('longDescription').value || "",  // optional
      pricingModel: document.getElementById('pricingModel').value,
      tags: document.getElementById('tags').value.split(","),  // Split tags by commas
      contactEmail: document.getElementById('contactEmail').value
    };
  
    // Log data to console for debugging
    console.log("Form Data Submitted:", toolData);
  
    // Submit data to Firestore
    db.collection("tools").add(toolData)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Tool submitted successfully!");
        
        // Optionally, reset the form
        document.getElementById('submit-tool-form').reset();
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("Error submitting tool. Please try again.");
      });
  });
  