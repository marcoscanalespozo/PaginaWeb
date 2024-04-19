// Datos de ejemplo para la misión y visión
var datosEmpresa = {
    mision: "Nuestra misión es...",
    vision: "Nuestra visión es..."
};

// Inicializa la instancia de Vue
new Vue({
    el: '#app',
    data: {
        busqueda: '',
        mision: datosEmpresa.mision,
        vision: datosEmpresa.vision
    },
    methods: {
        buscar: function() {
            // Lógica para buscar
            console.log("Buscando: " + this.busqueda);
            // Aquí podrías agregar la lógica para realizar la búsqueda en tu página web
        }
    }
});
