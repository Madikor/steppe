document.getElementById("application-form").addEventListener("submit", async function(e) {
    e.preventDefault();
  
    const form = e.target;
    const loader = document.getElementById("loader");
    const successMessage = document.getElementById("success-message");
  
    form.style.display = "none";
    loader.style.display = "block";
  
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (response.ok) {
        loader.style.display = "none";
        successMessage.style.display = "block";
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
        form.style.display = "block";
        loader.style.display = "none";
      }
    } catch (error) {
      alert("Ошибка сети. Проверьте подключение к интернету.");
      form.style.display = "block";
      loader.style.display = "none";
    }
  });
  