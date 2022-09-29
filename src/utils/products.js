export const products = [
  {id: 1, title:'pizza', category: 'vegetariana', description:'Grande de Muzzarella', price: 100, pictureUrl: 'https://d320djwtwnl5uo.cloudfront.net/recetas/cover/pizza_Mh3H4eanyBKEsStv1YclPWTf9OUqIi.png', stock:'number'},
  {id: 2, title:'hamburguesa', category: 'carne', description:'string', price: 100, pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg', stock:'number'},
  {id: 3, title:'ensalada', category: 'vegetariana', description:'string', price: 100, pictureUrl: 'https://t2.rg.ltmcdn.com/es/posts/3/2/6/ensalada_de_verduras_variadas_57623_600.jpg', stock:'number'},
  {id: 4, title:'empanadas', category: 'carne', description:'string', price: 100, pictureUrl: 'https://media.todojujuy.com/p/534d687c1d154c44205e5643b9091a31/adjuntos/227/imagenes/003/221/0003221167/770x0/smart/imagepng.png', stock:'number'}
]

export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000)
  })

  return promise
};

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    setTimeout(() => {
      return resolve(result);
    }, 2000)
  })

  return promise
};

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
      return resolve(results);
    }, 2000)
  })

  return promise
};