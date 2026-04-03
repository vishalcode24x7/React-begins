import axios from "axios";

const App = () => {
  // async function getdata() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   const json = await response.json();
  //   console.log(json);

    // const getdata = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await response.json();
    // console.log(data);

    // const getdata = async () =>{
    //   const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    //   console.log(data);

    const [data, setData] = useState([])
    const getdata = async () => {
      const response = await axios.get("https://picsum.photos/v2/list")
      setData(response.data);
    }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <div>
        {data.map(function(elem,idx){

          return <h3>Hello {elem.author}</h3>
        })}
      </div>
    </div>
  );
};

export default App;
