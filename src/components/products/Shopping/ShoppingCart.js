import React, { useEffect,memo } from "react";
import "./Shopping.css";
const ShoppingCart = memo((props) => {
  console.log([])
  useEffect(()=>{
    console.log("hello")
  })
  return (
    <div className="flex container mt-10">
      <div className="w-1/4 h-12"></div>
      <div className="w-3/4 h-12 text-right">
        <table className="w-full table">
          <thead>
            <tr className="table-border p-5">
              <th>محصول</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>جمع جزء</th>
            </tr>
          </thead>
          <tbody className="tbody-padding">
            <tr>
              <td>
                <span>
                  <a href="#d" className="close-btn">
                    {" "}
                  </a>
                </span>

                <span>سامسونگ</span>
                <img
                  className="inline-block h-12 w-12 mr-5"
                  src="/logo192.png"
                  alt="pic"
                />
              </td>

              <td>2,000,000</td>
              <td>5</td>
              <td>2,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
})

export default ShoppingCart;
