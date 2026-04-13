import { useCallback, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import  InputBox  from './components/input.jsx';
import useCurrencyInfo from './customhooks/useCurrencyInfo';

function App() {
  const [amount , setAmount] = useState(0);
  const[from, setFrom] = useState("USD");
  const[to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const {currencyInfo} = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo.rates) : [];

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const handleConvert = useCallback(() => {
    if (currencyInfo && currencyInfo.rates[to]) {
      const rate = currencyInfo.rates[to];
      setConvertedAmount(amount * rate);
    }
  }, [amount, to, currencyInfo]);

  return (
    <>
     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${heroImg}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleConvert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onamountChange={setAmount}
                                oncurrencyChange={setFrom}
                                currencyOptions={options}
                                selectedCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapCurrencies}

                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onamountChange={setConvertedAmount}
                                oncurrencyChange={setTo}
                                currencyOptions={options}
                                selectedCurrency={to}
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
