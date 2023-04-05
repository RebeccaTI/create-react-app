import './App.css';

function App() {

  const name = 'Rebecca'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

 //alteração de produto jsx
 const url ="https://via.placeholder.com/150"


  return (
    <div className="App">
     <h1>Olá React</h1>
     <p>Olá, meu nome é {newName}</p>
     <p>Soma: {sum(1,2)}</p>
     <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
