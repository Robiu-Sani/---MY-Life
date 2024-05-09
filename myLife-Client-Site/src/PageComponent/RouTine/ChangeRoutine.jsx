import { useState } from "react";

export default function ChangeRoutine() {
  const [rowItem, setRowItem] = useState(5);
  const [colItem, setColItem] = useState(5);

  const HandleRoutineTable = (e) => {
    e.preventDefault();
    const formValue = e.target;
    const htimedate = {
      day: formValue.Hdate.value,
      time: formValue.Htime.value,
    };
    const header = [];
    for (let i = 0; i < StoreTime.length; i++) {
      const rowData = {};
      StoreTime.forEach((item) => {
        rowData[item] = formValue[item].value;
      });
      header.push(rowData);
    }

    const everyFildData = [];
    for (let x = 0; x < FildName.length; x++) {
      const everyRowData = {};
      FildName.forEach((eachitem) => {
        everyRowData[eachitem] = formValue[eachitem].value;
      });
      everyFildData.push(everyRowData);
    }

    formValue.reset();
    console.log(header, htimedate, FildName, everyFildData);
  };

  const headerCells = [];
  const StoreTime = [];
  for (let i = 0; i < rowItem - 1; i++) {
    StoreTime.push(`htime${i}`);
    headerCells.push(
      <th key={i}>
        <input
          type="text"
          name={`htime${i}`}
          className="w-[180px] input mx-2"
        />
      </th>
    );
  }

  const tableRowItem = [];
  const FildName = [];
  for (let i = 0; i < colItem; i++) {
    const cols = [];
    for (let x = 0; x < rowItem; x++) {
      FildName.push(`${i + i}${x}fild`);
      cols.push(
        <td key={x}>
          <input
            type="text"
            name={`${i + i}${x}fild`}
            className="w-[180px] input mx-2"
          />
        </td>
      );
    }
    tableRowItem.push(<tr key={i}>{cols}</tr>);
  }

  const addRow = () => {
    setRowItem(rowItem + 1);
  };

  const removeRow = () => {
    if (rowItem > 1) {
      setRowItem(rowItem - 1);
    }
  };

  const addColumn = () => {
    setColItem(colItem + 1);
  };

  const removeColumn = () => {
    if (colItem > 1) {
      setColItem(colItem - 1);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex mb-3">
        <button
          onClick={addRow}
          className="p-1 px-3 cursor-pointer rounded-md bg-gray-600 text-white mx-1"
        >
          Add Row
        </button>
        <button
          onClick={removeRow}
          className="p-1 px-3 cursor-pointer rounded-md bg-gray-600 text-white mx-1"
        >
          Remove Row
        </button>
        <button
          onClick={addColumn}
          className="p-1 px-3 cursor-pointer rounded-md bg-gray-600 text-white mx-1"
        >
          Add Column
        </button>
        <button
          onClick={removeColumn}
          className="p-1 px-3 cursor-pointer rounded-md bg-gray-600 text-white mx-1"
        >
          Remove Column
        </button>
      </div>
      <div className="overflow-x-auto scrollShow">
        <form onSubmit={HandleRoutineTable}>
          <table className="table ">
            <thead>
              <tr>
                <th className="flex gap-1">
                  <input type="text" name="Hdate" className="input w-[90px]" />
                  <input type="text" name="Htime" className="input w-[90px]" />
                </th>
                {headerCells}
              </tr>
            </thead>
            <tbody>{tableRowItem}</tbody>
          </table>
          <input
            type="submit"
            className="input bg-blue-500 w-full my-5 cursor-pointer"
            value={"Add Routine"}
          />
        </form>
      </div>
    </div>
  );
}
