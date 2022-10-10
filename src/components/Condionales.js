import { useState } from "react";

const Condionales = () => {
  const [loading, setLoading] = useState(false);
  
  // #1 return temprano
  if (loading) {
    return <p>Cargando...</p>
  }

  return (
    <>
     <p>Carga completa</p> 
    </>
  );

  // #2 inline con frament
  // return (
  //   <>
  //     {loading && <p>Cargando...</p>}
  //     {!loading && <p>Carga completa</p>}
  //   </>
  // )

  // #3 inline con ternary
  // return (
  //   <p>
  //     {loading ? 'Cargando...' : 'Carga completa'}
  //   </p>
  // )
}
 
export default Condionales;