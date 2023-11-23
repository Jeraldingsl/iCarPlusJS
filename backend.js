$.ajax({
    type: "POST",
    url: "backend.php",
    data: {
        action: "registrar",
        descripcion: descripcion,
        imagen: imagen,
        marca: marca,
        modelo: modelo,
        tipo: tipo,
        año: año
    },
    success: function(response) {
        $("#resultados").html(response);
    }
});