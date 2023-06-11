import "./App.css";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Table } from "./Table";
import { toast } from "react-toastify";

function App() {
  const [data, setData] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  async function getUsersData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.status === 200) {
      const fetchedData = await response.json();
      setData(fetchedData);
      setFilteredData(fetchedData);
      toast.success("fetched");
    } else {
      toast.error(response.statusText);
    }
  }
  useEffect(() => {
    getUsersData();
  }, []);

  useEffect(() => {
    if (searchKeyWord) {
      const filteredArray = data.filter((obj) =>
        obj.name.toLowerCase().includes(searchKeyWord.toLowerCase())
      );
      console.log("filtered data", filteredArray);
      setFilteredData(filteredArray);
    } else {
      setFilteredData(data);
    }
  }, [searchKeyWord]);

  return (
    <div className="App">
      <header className="App-header section">
        <h1 className="page-title">Search Users Task JSON Placeholder</h1>
        <Search
          searchKeyWord={searchKeyWord}
          setSearchKeyWord={setSearchKeyWord}
        />
      </header>
      <main className="section">
        <Table filteredData={filteredData} />
      </main>
    </div>
  );
}

export default App;
