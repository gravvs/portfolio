import React, {createContext, useState} from 'react';

export const CharStats = createContext({
    name: "",
    str: 0,
    hp: 0,
    speed: 0,
    dmg: 0,
    lvl: 1,
    addStr: item =>{},
    addName: item =>{}
})

export const GameState = createContext({
    isName: false,
    setName: item => {}
})

export const GameApp = ({children}) => {
    const [isName, setName] = useState(false);

    return(
        <GameState.Provider
        value = {{
            isName,
            setName
        }}
        >
            {children}
        </GameState.Provider>
    )
}

export const UserStatsProvider = ({children}) => {
    const [name, addName] = useState('');
    const [str,addStr] = useState(10);
    const hp = 12;
    const speed = 2;
    const dmg = speed * str;
    const lvl = 1;

    return(
        <CharStats.Provider
        value = {{
            name,
            hp,
            speed,
            str,
            dmg,
            lvl,
            addName,
            addStr
        }}
        >
            {children}
        </CharStats.Provider>
    )
}

export const OponentStatsProvider = ({children}) => {
    const name = "Demon";
    const hp = 12;
    const speed = 1;
    const str = 10;
    const dmg = speed * str;
    const lvl = 1;


    return(
        <CharStats.Provider
        value = {{
            name,
            hp,
            speed,
            str,
            dmg,
            lvl
        }}
        >
            {children}
        </CharStats.Provider>
    )
}