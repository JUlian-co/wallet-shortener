# wallet-shortener

A cute utility to shorten crypto wallet addresses like `0x81...cF2B`.  
Perfect for displaying wallet addresses in a clean, readable format in dApps, and when you click on it, you even have **click-to-copy** built in.

---

## 🚀 Installation

```bash
npm install wallet-shortener
```

---

## ⚙️ Options

You can also configure how many characters to show on the left and right, and disable **click-to-copy**:

```jsx
<ShortAddress right={5} left={3} copyOnClick={false}>{address}</ShortAddress>
// -> "0x81C...F2B"
```

---

### ✅ Usage

```tsx
import { ShortAddress } from "wallet-shortener";

export default function App() {
  return (
    <ShortAddress>
      0x81C75741Db32d6329127bd499a33e562462BcF2B
    </ShortAddress>
  );
}
```

### 🔁 Props

| Prop         | Type     | Default | Description                                  |
|--------------|----------|---------|----------------------------------------------|
| `children`   | `string` | —       | The full Ethereum wallet address             |
| `left`       | `number` | `4`     | Characters to show on the left               |
| `right`      | `number` | `4`     | Characters to show on the right              |
| `copyOnClick`| `boolean`| `true`  | Copies the full address to clipboard on click|
| `className`  | `string` | `""`    | Optional CSS class for styling               |

---

## 💡 Ideal for

- Web3 dashboards  
- Wallet UIs  
- NFT marketplaces  
- DAO tools  
- dApps with address display  

---

## 📦 Lightweight & dependency-free

- Zero dependencies  
- ESM-ready  
- TypeScript support  
- Works in Node.js, Vite, Next.js, or modern frontend frameworks  

---

## 🧪 Example in Next.js

```tsx
import { ShortAddress } from "wallet-shortener";

export default function WalletDisplay({ address }) {
  return (
    <div>
      <ShortAddress>{address}</ShortAddress>
    </div>
  );
}
```

---

## 📈 npm Badges

![npm](https://img.shields.io/npm/v/wallet-shortener)  
![downloads](https://img.shields.io/npm/dm/wallet-shortener)  
[→ View on npm](https://www.npmjs.com/package/wallet-shortener)

---

## 🧠 Author

**Julian** – Building Web3 tools and products.

- GitHub: [https://github.com/JUlian-co](https://github.com/JUlian-co)  
- npm: [https://www.npmjs.com/package/wallet-shortener](https://www.npmjs.com/package/wallet-shortener)

---

## 📜 License

MIT – free to use, even commercially, idc.

---

🌟 → **Please give this repository a star to support me <3**
