import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [portfolioStocks, setPortfolioStocks] = useState([])

  const [stocks, setStocks] = useState([])

  const [checked, setChecked] = useState("Alphabetically")

  const [filterType, setFilterType] = useState(null)


  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStocks(data))
  },[])

  function handleAddStock(newStock) {
    const inPortfolio = portfolioStocks.find(
      (s) => s.id === newStock.id
    )
    if (!inPortfolio) {
      setPortfolioStocks([...portfolioStocks, newStock])
    }
  }

  function handleSellStock(oldStock) {
    setPortfolioStocks(prevStocks => prevStocks.filter(stock => stock.id !== oldStock.id))
  }

  let stocksToDisplay = stocks.sort((a, b) => {
    if (checked === 'Alphabetically') {
      return a.name.localeCompare(b.name)
    } else if (checked === 'Price') {
      return a.price - b.price
    }
  })

  stocksToDisplay = stocksToDisplay.filter(stock => {
    if (filterType === null) {
      return true
    } else {
    return stock.type === filterType
    }
  })

  


  return (
    <div>
      <SearchBar checked={checked} setChecked={setChecked} setFilterType={setFilterType} setStocks={setStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay} handleAddStock={handleAddStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolioStocks} handleSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
