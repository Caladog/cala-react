import React, { useState } from 'react';
import { KeepAlive } from 'react-activation';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const Gird = () => {
  const dataList = [
    {
      firstName: 'Bob',
      lastName: 'Harrison',
      gender: 'Male',
      address:
        '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Mary',
      lastName: 'Wilson',
      gender: 'Female',
      age: 11,
      address:
        '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
      mood: 'Sad',
      country: 'Ireland',
    },
    {
      firstName: 'Sadiq',
      lastName: 'Khan',
      gender: 'Male',
      age: 12,
      address:
        '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Jerry',
      lastName: 'Mane',
      gender: 'Male',
      age: 12,
      address:
        '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Bob',
      lastName: 'Harrison',
      gender: 'Male',
      address:
        '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Mary',
      lastName: 'Wilson',
      gender: 'Female',
      age: 11,
      address:
        '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
      mood: 'Sad',
      country: 'Ireland',
    },
    {
      firstName: 'Sadiq',
      lastName: 'Khan',
      gender: 'Male',
      age: 12,
      address:
        '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Jerry',
      lastName: 'Mane',
      gender: 'Male',
      age: 12,
      address:
        '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Bob',
      lastName: 'Harrison',
      gender: 'Male',
      address:
        '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Mary',
      lastName: 'Wilson',
      gender: 'Female',
      age: 11,
      address:
        '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
      mood: 'Sad',
      country: 'Ireland',
    },
    {
      firstName: 'Sadiq',
      lastName: 'Khan',
      gender: 'Male',
      age: 12,
      address:
        '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Jerry',
      lastName: 'Mane',
      gender: 'Male',
      age: 12,
      address:
        '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Bob',
      lastName: 'Harrison',
      gender: 'Male',
      address:
        '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Mary',
      lastName: 'Wilson',
      gender: 'Female',
      age: 11,
      address:
        '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
      mood: 'Sad',
      country: 'Ireland',
    },
    {
      firstName: 'Sadiq',
      lastName: 'Khan',
      gender: 'Male',
      age: 12,
      address:
        '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Jerry',
      lastName: 'Mane',
      gender: 'Male',
      age: 12,
      address:
        '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Bob',
      lastName: 'Harrison',
      gender: 'Male',
      address:
        '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Mary',
      lastName: 'Wilson',
      gender: 'Female',
      age: 11,
      address:
        '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
      mood: 'Sad',
      country: 'Ireland',
    },
    {
      firstName: 'Sadiq',
      lastName: 'Khan',
      gender: 'Male',
      age: 12,
      address:
        '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Jerry',
      lastName: 'Mane',
      gender: 'Male',
      age: 12,
      address:
        '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Bob',
      lastName: 'Harrison',
      gender: 'Male',
      address:
        '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Mary',
      lastName: 'Wilson',
      gender: 'Female',
      age: 11,
      address:
        '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
      mood: 'Sad',
      country: 'Ireland',
    },
    {
      firstName: 'Sadiq',
      lastName: 'Khan',
      gender: 'Male',
      age: 12,
      address:
        '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
      mood: 'Happy',
      country: 'Ireland',
    },
    {
      firstName: 'Jerry',
      lastName: 'Mane',
      gender: 'Male',
      age: 12,
      address:
        '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
      mood: 'Happy',
      country: 'Ireland',
    },
  ]

  var checkboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0;
  };
  var headerCheckboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0;
  };

  return (
    <div style={{ width: '100%', height: '600px' }} className="ag-theme-balham">

      <AgGridReact
        rowData={dataList}
        autoGroupColumnDef={{
          headerName: 'Group',
          minWidth: 170,
          field: 'athlete',
          valueGetter: function (params) {
            if (params.node.group) {
              return params.node.key;
            } else {
              return params.data[params.colDef.field];
            }
          },
          headerCheckboxSelection: true,
          cellRenderer: 'agGroupCellRenderer',
          cellRendererParams: { checkbox: true },
        }}
        defaultColDef={{
          flex: 1,
          minWidth: 100,
          editable: true,
          resizable: true,
        }}
        rowSelection={'multiple'}
        pagination={true}
      >
        <AgGridColumn
            field="firstName"
            minWidth={100}
            checkboxSelection={checkboxSelection}
            headerCheckboxSelection={headerCheckboxSelection}
          />
        <AgGridColumn field="lastName" />
        <AgGridColumn field="gender" />
        <AgGridColumn field="age" sortable={true} />
        <AgGridColumn field="mood" />
        <AgGridColumn field="country" />
        <AgGridColumn field="address" minWidth={200} />
      </AgGridReact>
    </div>
  );
};

export default (props) => (
  <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
    <Gird />
  </KeepAlive>)