import React, {useReducer} from "react";
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../../context/alert/type";
import { GithubContext } from "./githubContext";
import { githubReduser } from "./githubReduser";


console.log(process.env.REACT_APP_CLIENT_ID)
console.log(process.env.REACT_APP_CLIENT_CESRET)



export const GithubState = ({children}) => {
    const initialState = { 
        user: {},
        users: [],
        loading: false,
        repost: []
    }


    const [state, dispatch] = useReducer(githubReduser, initialState)

    const search = async value => {
        setLoading()
        // ...

        dispatch({
            type: SEARCH_USERS,
            payload: []
        })
    }


    const getUser = async name => {
        setLoading()
        //...

        dispatch({
            type: GET_USER,
            payload: {}
        })
    }

    const getRepos = async name => {
        setLoading()
        //...

        dispatch({
            type: GET_REPOS,
            payload: []
        })
    } 

    const clearUsers = () => dispatch({type: CLEAR_USERS})

    const setLoading = () => dispatch({type: SET_LOADING})

    const {user, users, repost, loading} = state


    return (
        <GithubContext.Provider value={{
            setLoading, search, getUser, getRepos, clearUsers, user, users, repost, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}