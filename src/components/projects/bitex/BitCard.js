import React from 'react'

const BitCard = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="flex lg:flex-row flex-col justify-around  border-b-4 border-gold-2900">
                    <div className="flex xl:justify-center justify-around px-2 py-2 
                    xl:w-80 md:w-60 sm:w-50 w-40 mx-auto">
                        <img
                            src={image}
                            alt="Crypto Coin"
                            className="h-16 p-1"
                        />
                        <p className="font-bold italic capitalize text-center text-white px-4 py-4 sm:w-80 w-40">
                            {name}
                        </p>
                    </div>
                    <div className="mx-auto text-center px-4 sm:py-4 py-2 text-white xl:w-80 lg:w-70 w-60">
                        <p className="">Current Price:</p>
                        <p className="">€{price.toLocaleString()}</p>
                    </div>
                    <div className="mx-auto text-center px-4 lg:py-8 py-2 xl:w-40 sm:w-20 w-80">
                        <p className="font-bold">
                            {priceChange < 0 ? (
                                <p className='text-red-2800'>
                                    {priceChange.toFixed(2)}%
                                </p>
                            ) : (
                                <p className='text-chartreuse-2900'>
                                    {priceChange.toFixed(2)}%
                                </p>
                            )}
                        </p>
                    </div>
                    <div className="mx-auto px-6 lg:py-8 py-2 sm:w-70 w-60">
                        <p className="text-white text-center">
                            Mkt Cap: €{marketcap.toLocaleString()}
                        </p>
                    </div>
                    <div className="mx-auto text-center px-2 lg:py-8 py-2 sm:w-40 w-80">
                        <p className="uppercase font-bold text-white">
                            {symbol}
                        </p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default BitCard
