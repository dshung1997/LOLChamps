import * as Type from '../Types';

const initialState = {
    data: [],
    text: '',
    error: 0,
    error_message: '',
};

export const champs = (state = initialState, action) =>
{
    if(action.type === Type.GET_CHAMPS_ERROR)
    {
        let newState = JSON.parse(JSON.stringify(state));
        newState.error = 1;
        newState.error_message = action.data;

        return newState;
    }

    else if(action.type === Type.SET_CHAMPS)
    {
        let newState = JSON.parse(JSON.stringify(state));
        newState.data = action.data;
       
        return newState;
    }

    else if(action.type === Type.FILTER_CHAMPS)
    {
        let newState = JSON.parse(JSON.stringify(state));

        newState.text = action.text;
        
        for(let c of newState.data)
        {
            c.visible = c.name.includes(newState.text);
            // console.log("c: " + c);
        }
        // newState.data[0].visible = true;

        return newState;
    }

    return state;
}