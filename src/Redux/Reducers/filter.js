import * as Type from '../Types';

const initialState = {
    data: [],
    text: '',
    error: 0,
    error_message: '',
};

export const filter = (state = initialState, action) =>
{
    if(action.type === Type.FILTER_CHAMPS)
    {
        let newState = JSON.parse(JSON.stringify(state));

        newState.text = action.text;
        
        for(let c of newState.data)
        {
            c.visible = c.name.includes(newState.text);
        }

        return newState;
    }

    return state;
}