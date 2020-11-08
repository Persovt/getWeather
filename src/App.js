

function App() {
  const getData = async(sity) => {
    await fetch('api.openweathermap.org/data/2.5/weather?id=2172797&appid=86181034ba903cb3066f9d04d1a27943')
      .then((resp)=>  resp.json())
      .then((data) => {console.log(data)})
  }

  getData()

  return (
    <div className="">
      
    </div>
  );
}

export default App;
