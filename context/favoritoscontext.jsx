
import React, { createContext, useContext} from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = (props) => {
    const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem("favoritos"))||[]);

    return <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>{props.children}</FavoritosContext.Provider>;
};