import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = { 
    userList : []
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userList.push(action.payload)
        },
        removeUser: (state,action)=>{
                state.userList = state.userList.filter((userDetail)=>
                userDetail.id !== action.payload
            )
        },
        updateUser:(state,action)=>{
            let temp = state.data
            temp.map((item,index)=>{
                if(index === action.payload.index){
                    item.id=action.payload.userid
                    item.userName=action.payload.userName 
                    item.userAge=action.payload.userAge 
                    item.userEmail=action.payload.userEmail
                }
            })
            state.data=temp
        }
    }
})

export const {addUser,removeUser,updateUser} = userSlice.actions

export default userSlice.reducer