const MyComponent = ({ value, name, saludar, children }) => {
  console.log(value);
  console.log(name);
  console.log(children);
  saludar();

  return (
    <>
      <h1>Este es mi componente {name}</h1>
      {children}
    </>
  )
};

export default MyComponent;