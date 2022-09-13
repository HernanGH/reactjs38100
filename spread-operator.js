/**
 * spread operator (copia el contenido de una estructura) (array, objetos y hasta parametros de funciones)
 * 1 copiar arrays
 * 2 fusion de arrays
 * 3 invocando funciones
 * 4 rest operator, obtener con el spread operator los parametros de una funcion en un solo array
 * 5 spread en objetos
 */

/**
 * 1 copiar arrays
 */

// const firstNumbers = [1, 2, 3]

// const firstNumbersCopyReference = firstNumbers // EVITAR FUERTE

// const firstNumbersCopy = [...firstNumbers]

// console.log({ firstNumbersCopy })

/**
 * 2 fusion de arrays
 */

// const firstNumbers = [1, 2, 3]
// const lastNumbers = [4, 5]

// const allNumbers = [...firstNumbers, ...lastNumbers, 6, 7, 8, 9]

// console.log({ allNumbers })

/**
 * 3 invocando funciones
 */

// const list = [1, 2, 3]

// const sum = (numero1, numero2, numero3) => {
//   return numero1 + numero2 + numero3
// }

// // const result = sum(list[0], list[1], list[2])

// const result = sum(...list) // sugar-syntax

// console.log('El resultado de la suma es: ', result);

/**
 * 4 rest operator
 */

// const genericSum = (...listOfParameters) => {
//   let total = 0
//   console.log(listOfParameters)
//   listOfParameters.forEach((parameter) => {
//     total+= parameter
//   })
//   return total
// }
 
// const result = genericSum(1, 2, 3, 4 , 5)
// console.log('El resultado de la suma es: ', result);

/**
 * 5 spread en objetos
 */

//  const person = {
//   name: 'Lionel',
//   lastname: 'Messi',
//   dni: 10000000
// }

// const personCopyReference = person // EVITAR FUERTE

// const personCopy = { ...person }

// console.log(personCopy);

const contactData = {
  mail: 'lmessi@mail.com',
  phone: '1122334455',
  password: 'lmessi10',
  username: 'lmessi',
  address: {
    country: 'France',
    state: 'Paris',
    street: {
      name: 'asd',
      number: 123
    }
  }
}

const contactDataCopy = { 
  ...contactData,
  address: {
    ...contactData.address,
    street: {
      ...contactData.address.street
    }
  }
}

contactData.address.country = 'Argentina'
contactData.address.state = 'Bs As'

console.log(contactDataCopy);
