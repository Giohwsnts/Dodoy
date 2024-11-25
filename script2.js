// Função para salvar o perfil no localStorage
function saveProfile() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const disease = document.getElementById("disease").value;
    const email = document.getElementById("email").value;
  
    // Armazena os dados no localStorage
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileDob", dob);
    localStorage.setItem("profileDisease", disease);
    localStorage.setItem("profileEmail", email);
  
    alert("Perfil salvo com sucesso!");
  }
  
  // Função para carregar o perfil do localStorage
  function loadProfile() {
    const name = localStorage.getItem("profileName");
    const dob = localStorage.getItem("profileDob");
    const disease = localStorage.getItem("profileDisease");
    const email = localStorage.getItem("profileEmail");
  
    // Verifica se há dados salvos no localStorage
    if (name || dob || disease || email) {
      document.getElementById("name").value = name || '';
      document.getElementById("dob").value = dob || '';
      document.getElementById("disease").value = disease || '';
      document.getElementById("email").value = email || '';
      alert("Perfil carregado com sucesso!");
    } else {
      alert("Nenhum perfil salvo encontrado.");
    }
  }
  
  document.getElementById("home-button").addEventListener("click", function() {
    window.location.href = "pagina2.html"; // Redireciona para a página 2
});

  // Carrega o perfil automaticamente ao abrir a página
  window.onload = loadProfile;
