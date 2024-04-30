import React from "react";
import { useSearchParams } from "react-router-dom";

const SizeOptionUi = ({ data: available_size }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const sizeOptionParam =
    searchParam.get("size") == "" ? null : searchParam.get("size");
  function HandleSizeOptions(event, value) {
    setSearchParam((prev) => {
      prev.set("size", value);
      return prev;
    });
  }
  const handleNone = () => {
    setSearchParam((prev) => {
      prev.delete("size");
      return prev;
    });
  };
  return (
    <div className="product-size-option product-option">
      <h3 className="option-title">Size</h3>
      <ul>
        <li
          className={
            !sizeOptionParam || sizeOptionParam == null ? "size active" : "size"
          }
          onClick={() => handleNone()}
        >
          None
        </li>
        {available_size.map(({ size, price }, idx) => {
          return (
            <li
              key={idx}
              className={sizeOptionParam == size ? "size active" : "size"}
              onClick={() => HandleSizeOptions(event, size)}
            >
              {size}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SizeOptionUi;

// <select onChange={HandleSizeOptions}>
//   <option selected value="empty">
//     Choose an option
//   </option>
//   {available_size.map(({ size, price }, idx) => {
//     return (
//       <option key={idx} value={size}>
//         {size}
//       </option>
//     );
//   })}
// </select>
