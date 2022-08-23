//Manejo de errores por medio de try Catch:

try {
    //throw new Error("Este es un error personalizado")
    console.log("Agregar codigo a evaluar");
} catch (error) {
    console.log("Se captura el error: " + error);
} finally {
    console.log(
        "El bloque finally se ejecutara siempre al final de un bloque try catch"
    );
}
