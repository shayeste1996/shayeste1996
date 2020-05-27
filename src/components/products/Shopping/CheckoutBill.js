import React from "react";

const CheckoutBill = () => {
  return (
    <ul>
      <li className="flex justify-between text-gray-600 py-3">
        <span>قیمت کالاها</span>
        <span>۴۹۵,۳۶۰ تومان</span>
      </li>
      <li className="flex justify-between text-gray-600 py-3">
        <span>تخفیف کالاها</span>
        <div className="text-red-600">۴۹۵,۳۶۰ تومان</div>
      </li>
      <li className="flex justify-between border-t border-gray-400 py-3 font-bold">
        <span>جمع</span>
        <span>۴۹۵,۳۶۰ تومان</span>
      </li>
      <li className="flex justify-between border-t border-gray-400 py-3 font-bold text-lg ">
        <span>مبلغ قابل پرداخت</span>
        <div className="text-purple-700">۴۹۵,۳۶۰ تومان</div>
      </li>
    </ul>
  );
};

export default CheckoutBill;
