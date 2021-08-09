import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import BitCard from './BitCard';

const BitMain = () => {
    const [loading, setIsLoading] = useState(true);
    const [coinsData, setCoinsData] = useState([]);
    const [search, setSearch] = useState('');
    const [coinDrop, setCoinDrop] = useState('25');

    const coinDropHandle = (e) => {
        const selectedInteger = e.target.value;
        setCoinDrop(selectedInteger);
    }

    useEffect(() => {
        axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${coinDrop}&page=1&sparkline=false`
        )
            .then(res => {
                setCoinsData(res.data);
                //console.log(res.data);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
    }, [coinDrop]);

    const coinSearch = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coinsData.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {loading ? (
                <Spinner />
            ) :
                (
                    <div className="bg-black pb-4">
                        <div>
                            <h1 className="bg-cerulean-2900 p-2 text-center text-2xl font-bold">Crypto-currency Exchange</h1>
                        </div>
                        <div className="flex justify-around md:flex-row flex-col">
                            <div>
                                <form className="flex justify-center">
                                    <input
                                        onChange={coinSearch}
                                        type="text"
                                        placeholder="Search for coin.."
                                        className="h-10 rounded-lg p-2 m-2"
                                    />
                                </form>
                            </div>
                            <div className="p-4 flex justify-center">
                                <label
                                    for="listCount"
                                    className="text-white font-bold px-1"
                                >
                                    Choose list count:
                                </label>

                                <select
                                    id="listCount"
                                    className="rounded"
                                    onChange={coinDropHandle}
                                >
                                    <option value="25" selected>25</option>
                                    <option value="50">50</option>
                                    <option value="75">75</option>
                                    <option value="100">100</option>
                                    <option value="150">150</option>
                                    <option value="200">200</option>
                                    <option value="250">250</option>
                                </select>

                            </div>
                        </div>
                        <div className="border-black">
                            {filteredCoins.map((coin) => {
                                return <BitCard
                                    coin={coin}
                                    key={coin.id}
                                    name={coin.name}
                                    price={coin.current_price}
                                    symbol={coin.symbol}
                                    marketcap={coin.total_volume}
                                    volume={coin.market_cap}
                                    image={coin.image}
                                    priceChange={coin.price_change_percentage_24h}
                                />
                            })}
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default BitMain
