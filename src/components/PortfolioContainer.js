import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, handleSellStock, id}) {

  const portfolioStocks = stocks.map(stock => <Stock stock={stock} key={stock.id} id={stock.id} handleStock={handleSellStock} />)

  return (
    <div>
      <h2>My Portfolio</h2>
        {portfolioStocks}
    </div>
  );
}

export default PortfolioContainer;