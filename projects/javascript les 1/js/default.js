/*alert('Mijn eerste lijn code.');
let naam = 'Jimmy'
    //alert('Mijn naam: ' + naam)
let getal1 = 5
let getal2 = 2
let r = getal1 + getal2
alert(getal1 + getal2)
console.log(r)


function myFirstfunction() {

    alert('iets')
}

myFirstfunction()

function mySecondfunction(paraMeterMeegeven, tweedeParam) {

    //alert('Hallo ' + paraMeterMeegeven + tweedeParam)
    //alert(`Hallo ${paraMeterMeegeven + tweedeParam}`)
    //document.getElementById('jefke').innerHTML = "I'm a p tag"
    document.getElementById('jefke').textContent = "I'm a p tag"
    document.querySelector('#tom').textContent = "lol"
    document.querySelector('.maria').textContent = "test"

}
mySecondfunction(naam, r)

arrowFunction() werkt niet vanwege hoisting - > ArrowFunctie
arrowFunction = (magHetOfNiet) => {

    if (magHetOfNiet) {
        alert("Da mag")
    } else {
        alert("Da mag niet")
    }

} 

arrowFunction()
*/


let reaction = document.querySelector('#testje')
reaction.addEventListener('click', checkIfEmpty => {
        let input = document.querySelector('input').value

        if (input === '') {
            alert('input is leeg')
        } else {
            alert('input is niet leeg')
        }

    }

)