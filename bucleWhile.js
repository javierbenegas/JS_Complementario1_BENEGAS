let num = prompt('Adivina el número afortunado entre el 00 y 20:')

while (num != 13){
    alert(`El número ${num} no es el correcto!!!`)
    num = prompt('intenta nuevamente!!!')
}

alert('¡¡¡GANASTE!!!')