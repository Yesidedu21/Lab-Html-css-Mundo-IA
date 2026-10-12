document.getElementById('formContacto').addEventListener('submit', function (event) {
      event.preventDefault();

      const correo = document.getElementById('correo').value;
      const mensaje = document.getElementById('mensaje').value;
      const contenedorAlerta = document.getElementById('alerta-contenedor');

      if (!correo || !mensaje) {
        contenedorAlerta.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show text-start mb-4" role="alert">
            Por favor, completa los campos requeridos.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        return;
      }

      
      contenedorAlerta.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show text-start mb-4 shadow-sm" role="alert" style="background-color: rgba(46, 230, 214, 0.15); border-color: #2ee6d6; color: #e8ebff;">
          <i class="bi bi-check-circle-fill me-2 text-info"></i> <strong>Mensaje enviado</strong> con éxito. Nos pondremos en contacto pronto.
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

      this.reset();
    });