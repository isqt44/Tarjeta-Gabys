// Función para mostrar el mensaje largo y ocultar el mensaje inicial
function revealMessage() {
  // Ocultar el texto principal
  document.getElementById('mainText').style.display = 'none';
  
  // Mostrar el mensaje largo
  document.getElementById('surprise').classList.remove('hidden');
  
  // Opcionalmente, también podrías ocultar el botón después del clic
  document.getElementById('clickButton').style.display = 'none';
}