import React from "react";
import MUIDataTable from "mui-datatables";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// const Card = () => (
//   <tr>
//     <td className="fullWidth">
//       <h1>
//         lorem ipsum dorel em quol acee, vion, bloolw, wafeo, feiwjfoiew,
//         foiwejifowefjweoi, fewjoewjfowei, fwefwefewfewfewf
//       </h1>
//     </td>
//   </tr>
// );

const ExpandableRowTable = (props) => {
  const columns = [
    {
      name: "Name"
    }
  ];
  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis", 30, 100000],
    ["Business Analyst", "Business Consultant", "Dallas", 55, 200000],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, 500000],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, 50000],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, 75000],
    ["Blake Duncan", "Business Management Analyst", "San Diego", 65, 94000],
    ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, 210000],
    ["Lane Wilson", "Commercial Specialist", "Omaha", 19, 65000],
    ["Robin Duncan", "Business Analyst", "Los Angeles", 20, 77000],
    ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, 135000],
    ["Harper White", "Attorney", "Pittsburgh", 52, 420000],
    ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, 150000],
    ["Frankie Long", "Industrial Analyst", "Austin", 31, 170000],
    ["Brynn Robbins", "Business Analyst", "Norfolk", 22, 90000],
    ["Justice Mann", "Business Consultant", "Chicago", 24, 133000],
    ["Addison Navarro", "Business Management Analyst", "New York", 50, 295000],
    ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000],
    ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000],
    ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000],
    ["Danny Leon", "Computer Scientist", "Newark", 60, 220000],
    ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000],
    ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000],
    ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000],
    ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000],
    ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000],
    ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000],
    ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000],
    ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000],
    [
      "Gabby Strickland",
      "Business Process Consultant",
      "Scottsdale",
      26,
      45000
    ],
    ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000]
  ];

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];

  const myTheme = createMuiTheme({
    overrides: {
      MUIDataTable: {
        responsiveScroll: {
          maxHeight: "none"
        }
      }
    }
  });

  const DGcolumns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`
    }
  ];

  const DGrows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
  ];

  const options = {
    filter: true,
    onFilterChange: (changedColumn, filterList) => {
      console.log(changedColumn, filterList);
    },
    selectedRows: {
      text: "row row row"
    },
    filterType: "dropdown",
    responsive: "scrollMaxHeight",
    rowsPerPage: 10,
    expandableRows: true,
    renderExpandableRow: (rowData, rowMeta) => {
      console.log(rowData, rowMeta);
      return (
        <React.Fragment>
          <tr>
            <td colSpan={6}>
              <Table style={{ minWidth: "650" }} aria-label="simple table">
                <DataGrid
                  autoHeight
                  {...data}
                  rows={DGrows}
                  columns={DGcolumns}
                  pageSize={100}
                  loading={false}
                  rowsPerPageOptions={[1000]}
                  checkboxSelection
                  disableSelectionOnClick
                  components={{
                    Toolbar: GridToolbar
                  }}
                />
              </Table>
            </td>
          </tr>
        </React.Fragment>
      );
    },
    page: 1
  };

  return (
    <MUIDataTable
      title={"ACME Employee list"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default ExpandableRowTable;
