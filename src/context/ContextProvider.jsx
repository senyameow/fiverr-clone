import { createContext, useState } from "react";
import { useSyncExternalStore } from 'react';
import {BsCurrencyEuro, BsCurrencyDollar} from 'react-icons/bs'
import {BiRuble} from 'react-icons/bi'
import { AICards } from "../data";


export const Context = createContext(null)

// создадим пока юзера

const currentUser = {
    id: 1,
    userName: 'Senyameow',
    isSeller: true,
}


    

const ContextProvider = ({children}) => {

    const [online, setOnline] = useState(false)

    const [videoClicked, setVideoClicked] = useState(false)

    const [favorites, setFavorites] = useState([
        
    ])

    function removeFromFavorites(id) { // удаление объекта из массива при совпадении id
        setFavorites(favorites.filter(favorite => favorite.id != id));
     }

    const addToFavorites = id => {
        if (!favorites.includes(AICards[id])) {
            setFavorites([...favorites, AICards[id]])
        } else {
            removeFromFavorites(id)
        }
    }

    const [currencyCounter, setCurrencyCounter] = useState(1)

    const currencies = [
        {
            name: 'EUR',
            mult: 1,
            icon: <BsCurrencyEuro size={20} />,
            symbol: '€'


        },
        {
            name: 'USD',
            mult: 1.1,
            icon: <BsCurrencyDollar size={20} />,
            symbol: '$'


        },
        {
            name: 'RUB',
            mult: 100,
            icon: <BiRuble size={20} />,
            symbol: '₽'


        },

    ]

    const [newCards, setNewCards] = useState(AICards)

    const [raiting, setRaiting] = useState(null)
    const [price, setPrice] = useState(null)

    const applySorting = () => {
        setNewCards(AICards.filter(card => card.raiting >= raiting && (card.price > price.from && card.price <= price.to)))
        console.log(raiting)
        
    }

    const [currency, setCurrency] = useState(currencies[currencyCounter])

    // function useWindowDimensions() {
    //     // the 3rd parameter is optional and only needed for server side rendering
    //     return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    // }
    // function subscribe(callback) {
    //     window.addEventListener('resize', callback);
    //     return () => window.removeEventListener('resize', callback);
    // }
    // function getSnapshot() {
    //     return { width: window.innerWidth, height: window.innerHeight };
    // }
    // function getServerSnapshot() {
    //     return {
    //         width: 0,
    //         height: 0,
    //     };
    // }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [showP, setShowP] = useState(false)

    const [menuOpened, setMenuOpened] = useState(false)

    const changeSts = () => {
        if (windowWidth > 1400) {
            return 5
        } else if ( windowWidth < 600 ){
            return 1
        } else if ( windowWidth < 800 ){
            return 2
        } else if ( windowWidth < 1000 ){
            return 3
        } else if ( windowWidth < 1200 ){
            return 4
        } 
    }

    const contextValue = {
        currentUser,

        showP,
        setShowP,
        menuOpened,
        setMenuOpened,
        windowWidth,
        setWindowWidth,

        changeSts,
        currency,
        setCurrency,

        currencies,
        currencyCounter,
        setCurrencyCounter,
        addToFavorites,
        favorites,
        
        videoClicked,
        setVideoClicked,

        online,
        setOnline,

        raiting,
        setRaiting,
        price,
        setPrice,

        applySorting,
        newCards

        
        
    }
    
    return (
        <Context.Provider value = {contextValue}>
            {children}
        </Context.Provider>
    )

}

export default ContextProvider