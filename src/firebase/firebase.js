import React, { createContext, useEffect } from 'react';
import { app, database } from './firebaseConfig';
import { useDispatch } from 'react-redux';
import 'firebase/database';
import { setFoods } from '../actions';


const FirebaseContext = createContext(null)
export { FirebaseContext }

export default ({ children }) => {
    let firebase = {
        app: app,
        database: database,

        api: {
            getData
        }
    }

    const dispatch = useDispatch();

    function getData() {
        firebase.database.ref('food-info').on('value', (snapshot) => {
            const foods = snapshot.val();
            let _list = []
            for (var food in foods) {
                _list.push({
                    ...foods[food],
                    id: food
                });
            }
            dispatch(setFoods(_list)); //need to create new Redux action

        })
    }

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )

}