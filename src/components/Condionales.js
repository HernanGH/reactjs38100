import { useState } from "react";

const Condionales = () => {
  const [loading, setLoading] = useState(false);
  
  // #1 return temprano
  if (loading) {
    return <h4>Cargando...</h4>
  }

  return (
    <>
     <h4>Carga completa</h4> 
    </>
  );

  // #2 inline con frament
  // return (
  //   <>
  //     {loading && <h4>Cargando...</h4>}
  //     {!loading && <h4>Carga completa</h4>}
  //   </>
  // )

  // #3 inline con ternary
  // return (
  //   <h4>
  //     {loading ? 'Cargando...' : 'Carga completa'}
  //   </h4>
  // )
}
 
export default Condionales;