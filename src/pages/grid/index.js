import React, { useState } from 'react'
import { KeepAlive } from 'react-activation'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import { SmileTwoTone, FrownTwoTone } from '@ant-design/icons'
import MoodSelector from '@/components/MoodSelector'
import CountrySelector from '@/components/CountrySelector'
import dataList from './data'

const NoRowsOverlay = (props) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="41" className="ant-empty-img-simple" viewBox="0 0 64 41">
        <g fill="none" fillRule="evenodd" transform="translate(0 1)">
          <ellipse cx="32" cy="33" className="ant-empty-img-simple-ellipse" rx="32" ry="7" />
          <g fillRule="nonzero" className="ant-empty-img-simple-g">
            <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
            <path
              d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
              className="ant-empty-img-simple-path"
            />
          </g>
        </g>
      </svg>
      <div className="empty-tips" style={{ marginTop: 8, color: 'rgba(0,0,0,.25)', fontSize: 14 }}>
        暂无数据
      </div>
    </>
  );
};

const Gird = () => {
  const [gridApi, setGridApi] = useState(null)
  const [gridColumnApi, setGridColumnApi] = useState(null)
  const checkboxSelection = (params) => {
    return params.columnApi.getRowGroupColumns().length === 0
  }
  const headerCheckboxSelection = (params) => {
    return params.columnApi.getRowGroupColumns().length === 0
  }

  const [gridData, setGridData] = useState(dataList);

  // 行显示格式化
  const MoodCellFormatter = (row) => {
    if (row.value === 'Sad') {
      return <FrownTwoTone twoToneColor="#eb2f96" />
    } else {
      return <SmileTwoTone twoToneColor="#52c41a" />
    }
  }

  // 行编辑格式化
  const moodCellEditor = (params) => {
    return { component: 'moodSelector' }
  }
  const countryCellEditor = (params) => {
    return { component: 'countrySelector' }
  }

  const agColumn = [
    { headerName: "姓名", field: "firstName", checkboxSelection: checkboxSelection, headerCheckboxSelection: headerCheckboxSelection, lockPosition: true, suppressNavigable: true, rowDrag: true },
    { headerName: "性别", field: "gender" },
    { headerName: "年龄", field: "age", sortable: true, editable: true },
    { headerName: "心情", field: "mood", headerClass: "centerAlign", width: 100, resizable: false, cellRenderer: "moodCellRenderer", cellStyle: { textAlign: 'center' }, editable: true, cellEditorSelector: moodCellEditor, cellEditorPopupPosition: 'under' },
    { headerName: "国家", field: "country", cellStyle: { textAlign: 'center' }, editable: true, cellEditorSelector: countryCellEditor },
    { headerName: "地址", field: "address", minWidth: 300, suppressAutoSize: true, flex: 2 },
  ];

  const gridOptions = {
    columnDefs: agColumn,
    singleClickEdit: true,
    defaultColDef: {
      editable: false,
      sortable: false,
      resizable: true,
      filter: true,
      width: 150,
      minWidth: 100,
      maxWidth: 500
    }
  }
  const onGridReady = (params) => {
    //console.log(params)
    setGridApi(params.api)
    setGridColumnApi(params.columnApi)
  }
  //// 排序
  const onCountryFirst = () => {
    console.log('c')
    gridColumnApi.moveColumn('country', 3)
  }
  //// 列顺序
  const onPrintColumns = () => {
    const cols = gridColumnApi.getAllGridColumns();
    //console.log(cols);
    const colToNameFunc = (col, index) => index + ':{field:' + col.getId() + ',width:' + col.getActualWidth() + ',visible:' + col.isVisible() + '}';
    const colNames = cols.map(colToNameFunc).join('\n');
    console.log(colNames);
  }
  //// 打印DataList
  const onPrintData = () => {
    console.log(gridData);
  }

  return (
    <div style={{ width: '100%', height: '720px' }} className="ag-theme-balham">
      <button onClick={() => onCountryFirst()}>Country First</button>
      <button onClick={() => onPrintColumns()}>Print Columns</button>
      <button onClick={() => onPrintData()}>Data List</button>
      <AgGridReact
        rowData={gridData}
        gridOptions={gridOptions}
        rowSelection={'multiple'}
        pagination={true}
        paginationPageSize={30}
        frameworkComponents={{
          moodCellRenderer: MoodCellFormatter,
          moodSelector: MoodSelector,
          countrySelector: CountrySelector,
          noRowsOverlay: NoRowsOverlay
        }}
        onDragStopped={onPrintColumns}
        animateRows={true}
        onGridReady={onGridReady}
        noRowsOverlayComponent={'noRowsOverlay'}
        headerHeight={30}
      />
    </div>
  )
}

export default (props) => (
  <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
    <Gird />
  </KeepAlive>
)
