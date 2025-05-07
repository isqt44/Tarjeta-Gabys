// Función para mostrar el mensaje largo y ocultar el mensaje inicial
function revealMessage() {
  // Ocultar el texto principal
  document.getElementById('mainText').style.display = 'none';
  
  // Mostrar el mensaje largo
  document.getElementById('surprise').classList.remove('hidden');
  
  // Opcionalmente, también podrías ocultar el botón después del clic
  document.getElementById('clickButton').style.display = 'none';

  // Crear las huellitas con patrón repetido
  createPawPrintPattern();
}

// Función para crear un patrón de huellitas distribuidas por toda la carta
function createPawPrintPattern() {
  const card = document.querySelector('.card');
  const numRows = 7; // Reducimos el número de filas de huellas (70% de 10)
  const numColumns = 7; // Reducimos el número de columnas de huellas (70% de 10)
  const horizontalSpacing = card.offsetWidth / numColumns;
  const verticalSpacing = card.offsetHeight / numRows;

  // Eliminar las huellas previas
  const previousPawPrints = card.querySelectorAll('.paw-print');
  previousPawPrints.forEach(paw => paw.remove());

  // Crear huellitas distribuidas de manera más equilibrada
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      const pawPrint = document.createElement('div');
      pawPrint.textContent = '🐾';
      pawPrint.classList.add('paw-print');

      // Establecer la posición de cada huella de manera más dispersa
      const offsetX = Math.random() * 30 - 15; // Añadir desplazamiento aleatorio horizontal
      const offsetY = Math.random() * 30 - 15; // Añadir desplazamiento aleatorio vertical

      // Posicionar las huellas de forma diagonal
      pawPrint.style.left = `${(j * horizontalSpacing) + offsetX}px`;
      pawPrint.style.top = `${(i * verticalSpacing) + offsetY}px`;

      // Añadir la huella al contenedor
      card.appendChild(pawPrint);
    }
  }
}

// Llamamos a la función para crear las huellitas al cargar la página
createPawPrintPattern();
