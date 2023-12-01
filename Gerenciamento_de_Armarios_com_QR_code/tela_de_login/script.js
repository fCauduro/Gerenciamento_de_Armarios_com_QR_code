function authenticate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação
    if (username === 'master' && password === '1234') {
        alert('Login bem-sucedido!');
window.location.href = '../tela ler qr/index.html';
          
      
    } else {
      alert('Login falhou. Verifique seu usuário e senha.');
    }
  }
