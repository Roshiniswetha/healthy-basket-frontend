import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { GETFRUITSURL , ADDFRUITSURL } from "./constants";
import axios from "axios";

const fruitSlice = createSlice({
    name: 'fruitSlice',
    initialState: {
        numberOfItems: 0,
        // cartItems:[],
        fruits:[],
        fruit:[],
        isLoading: false,
        isLoaded: false,
    },
    reducers: {
        getAllFruits: (state,action) => {
            state.fruits.push(action.payload)
        },
    }
})


export const onFruitsPageLoad = () => {
    return function(dispatch) {
        axios.get(GETFRUITSURL)
        // .then((response) => {
        //     const convertString = JSON.stringify(response.data);
        //     dispatch(fruitsActions.getAllFruits(response.data))
        //     console.log(convertString));
        // })
        .then(response => dispatch(fruitsActions.getAllFruits(response.data)))
        .catch(errors => console.log(errors));
    }
}

export const addFruits = (body,file) => {
    return function(dispatch) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', body.name);
        formData.append('slogan', body.slogan);
        formData.append('description', body.description);
        formData.append('price', body.price);
        formData.append('quantity', body.quantity);
        formData.append('date', body.date);
        formData.append('weight', body.weight);
        formData.append('healthBenefits', body.healthBenefits);
        formData.append('lifetime', body.lifetime);
        // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios.post(ADDFRUITSURL, formData)
        .then(response => console.log(response))
        .catch(errors => console.log(errors))
        }
}

export const fruitsActions = fruitSlice.actions;
export default fruitSlice