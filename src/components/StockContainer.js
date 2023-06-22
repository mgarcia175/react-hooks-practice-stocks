import React, {useEffect} from "react";
import Stock from "./Stock";


function StockContainer({stocks, handleAddStock}) {
  const allStocks = stocks.map(stock => <Stock stock={stock} key={stock.id} id={stock.id} handleStock={handleAddStock} />)

  return (
    <div>
      <h2>Stocks</h2>
      {allStocks}
    </div>
  );
}

export default StockContainer;