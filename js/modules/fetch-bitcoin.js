export default function fetchBitcoins(url, target) {
  function showBitcoinPrice(btcPrice) {
    const bitcoinPrice = document.querySelector(target);
    bitcoinPrice.innerText = btcPrice;
  }
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      const btcPrice = (1000 / bitcoinJson.BRL.sell).toFixed(4);
      showBitcoinPrice(btcPrice);
    } catch (error) {
      console.log(error);
    }
  }

  return fetchBitcoin();
}
