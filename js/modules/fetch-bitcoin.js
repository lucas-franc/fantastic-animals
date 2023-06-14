export default function initFetchBitcoin() {
  function showBitcoinPrice(btcPrice) {
    const bitcoinPrice = document.querySelector(".btc-price");
    bitcoinPrice.innerText = btcPrice;
  }
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      const btcPrice = (1000 / bitcoinJson.BRL.sell).toFixed(4);
      showBitcoinPrice(btcPrice);
    } catch (error) {
      console.log(error);
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
