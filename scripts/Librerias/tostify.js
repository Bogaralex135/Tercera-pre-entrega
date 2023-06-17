export function mostrarAlerta(texto) {
  Toastify({
    text: texto,
    duration: 3000,
    gravity: 'top',
    position: 'right', // `left`, `center` or `right`
    stopOnFocus: true,
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
    onClick: function () {}, // Callback after click
  }).showToast()
}
export default mostrarAlerta
