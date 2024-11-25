document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const signInButton = document.getElementById("singinButton");
  
    // Função de Login
    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); 
  
        const username = document.getElementsByName("username")[0].value;
        const password = document.getElementsByName("password")[0].value;
  
        if (username.trim() === "" || password.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
  
        // Verificar se o usuário existe no LocalStorage
        const savedPassword = localStorage.getItem(username);
        if (savedPassword && savedPassword === password) {
            alert("Login bem-sucedido! Redirecionando para a próxima página.");
            window.location.href = "pagina2.html";
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
  
        // Limpar os campos
        document.getElementsByName("username")[0].value = "";
        document.getElementsByName("password")[0].value = "";
    });
  
    // Função de Inscrição
    signInButton.addEventListener("click", function(event) {
        event.preventDefault(); 
  
        const username = document.getElementsByName("username")[0].value;
        const password = document.getElementsByName("password")[0].value;
  
        if (username.trim() === "" || password.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
  
        // Salvar o usuário e a senha no LocalStorage
        localStorage.setItem(username, password);
        alert("Usuário cadastrado com sucesso!");
  
        // Limpar os campos
        document.getElementsByName("username")[0].value = "";
        document.getElementsByName("password")[0].value = "";
    });
  });
  