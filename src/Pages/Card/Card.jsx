import { useEffect, useState } from "react";

const Card = () => {
    const [card, setCard] = useState([]);
    
    useEffect(() => {
        fetch("https://scis-part-2.vercel.app/coffee")
            .then((res) => res.json())
            .then((data) => {
                setCard(data)
            })
            .catch(error => {
                console.log("error message", error)
            })
    }, []);

    return (
        <div>
            <p>Total items: {card.length}</p>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 my-10">
                {card.map((cards, index) => (
                    <div key={index} className="max-w-full border border-gray-300 rounded-xl text-black p-2">
                    <img
                            className="rounded-t-lg w-full lg:max-h-[250px] max-h-[400px]"
                            src={cards.ProductImage}
                            alt={cards.ProductName}
                        />
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {cards.ProductName}
                            </h5>
                            <p className="text-sm font-semibold tracking-tight text-gray-500 dark:text-white">
                                {cards.Description}
                            </p>
                        </a>
                        <div className="flex justify-between items-center">
                        <div className="mb-5 mt-2.5 flex items-center">
                        {Array.from({ length: Math.floor(cards.Ratings) }, (_, index) => (
                            <svg
                                key={index}
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                            {cards.Ratings}
                        </span>
                        </div>
                        <div className="text-sm font-semibold tracking-tight text-gray-500 dark:text-white">
                        {cards.ProductCreatedDateTime}
                        </div>
                        </div>

                        <div className="flex items-center justify-between text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            <div className="text-sm font-semibold tracking-tight text-gray-500 dark:text-white">
                        {cards.Category}
                        </div>
                            {/* <a
                                href="#"
                                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                {cards.ProductCreatedDateTime}
                            </a> */}
                           <span className="text-3xl font-bold text-gray-700 dark:text-white">
                                ${cards.Price}
                            </span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
