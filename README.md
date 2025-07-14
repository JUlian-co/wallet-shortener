# wallet-shortener

A cute utility to shorten Ethereum wallet addresses like `0xE355...99F4`.  
Perfect for displaying wallet addresses in a clean, readable format in dApps.

## 🚀 Installation

```bash
npm install wallet-shortener
```

## 🔧 Usage

```js
import { shortAddress } from "wallet-shortener";

const full = "0xE355f4f2d474Bd390b6223fC69e37F08C5Ae99F4";

const short = shortAddress(full); // Default: 4 left / 4 right
// -> "0xE3...99F4"
```

## ⚙️ Options

You can also configure how many characters to show on the left and right:

```js
shortAddress("0xE355f4f2d474Bd390b6223fC69e37F08C5Ae99F4", {
  left: 5,
  right: 3
});
// -> "0xE35...9F4"
```

## 💡 Ideal for

- Web3 dashboards  
- Wallet UIs  
- NFT marketplaces  
- DAO tools  
- dApps with address display  

## 📦 Lightweight & dependency-free

- Zero dependencies  
- ESM-ready  
- Works in Node.js, Vite, Next.js, or modern frontend frameworks  

## 🧪 Example in Next.js

```tsx
import { shortAddress } from "wallet-shortener";

export default function WalletDisplay({ address }) {
  return <p>{shortAddress(address, { left: 6, right: 5 })}</p>;
}
```

## 🧠 Author

**Julian** – Building Web3 tools and products.

- GitHub: [https://github.com/JUlian-co](https://github.com/JUlian-co)  
- npm: [https://www.npmjs.com/package/wallet-shortener](https://www.npmjs.com/package/wallet-shortener)

## 📜 License

MIT – free to use, even commercially, idc.



--> Please give this repository a start to support me <3