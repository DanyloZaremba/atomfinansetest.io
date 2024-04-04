
const getExchangeRate = async () => {
    const response = await fetch('https://data.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.htmll');
    const data = await response.json();
    return data.rates.UAH;
  };
  
  const updatePrices = async () => {
    const rate = await getExchangeRate();
    const prices = document.querySelectorAll('.price');
  
    prices.forEach(priceElement => {
      const euroPrice = parseFloat(priceElement.textContent.slice(1));
      const priceInUAH = euroPrice * rate;
      priceElement.textContent = `${priceInUAH.toFixed(2)} грн`;
    });
  };
  
  updatePrices();
  