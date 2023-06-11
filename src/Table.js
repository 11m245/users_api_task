import { useEffect, useState } from "react";
import StickyHeadTable from "./StickyHeadTable";

function Table({ filteredData }) {
  const [rows, setRows] = useState(
    filteredData.map((user) => createData(user))
  );
  const columns = [
    { id: "id", label: "ID", minWidth: 30 },
    { id: "name", label: "Name", minWidth: 100 },
    { id: "userName", label: "UserName", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "phone", label: "Phone", minWidth: 100 },
    { id: "website", label: "Website", minWidth: 100 },
    { id: "company", label: "Company", minWidth: 100 },
    { id: "address", label: "Address", minWidth: 100 },
    //   {
    //     id: "population",
    //     label: "Population",
    //     minWidth: 170,
    //     align: "right",
    //     format: (value) => value.toLocaleString("en-US"),
    //   },
    //   {
    //     id: "size",
    //     label: "Size\u00a0(km\u00b2)",
    //     minWidth: 170,
    //     align: "right",
    //     format: (value) => value.toLocaleString("en-US"),
    //   },
    //   {
    //     id: "density",
    //     label: "Density",
    //     minWidth: 170,
    //     align: "right",
    //     format: (value) => value.toFixed(2),
    //   },
  ];
  function createData(obj) {
    const { street, suite, city, zipcode } = obj.address;
    return {
      id: obj.id,
      name: obj.name,
      userName: obj.username,
      email: obj.email,
      address: `${suite},${street},${city},ZIP-${zipcode}`,
      phone: obj.phone,
      website: obj.website,
      company: obj.company.name,
    };
  }

  useEffect(() => {
    const rowsArray = filteredData.map((user) => createData(user));
    setRows(filteredData.map((user) => createData(user)));
    console.log("rows Arr", rowsArray);
  }, [filteredData]);

  return (
    <>
      <div className="table-container">
        <StickyHeadTable columns={columns} rows={rows} />
      </div>
    </>
  );
}

export { Table };
