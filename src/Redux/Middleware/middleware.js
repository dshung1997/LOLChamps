import * as Type from '../Types';

const parseData = (rawData) => {
    let data = [];

    for (const key in rawData) {
        if (rawData.hasOwnProperty(key)) {
            data.push(
                {
                    name: key,
                    image_url: 'https://ddragon.leagueoflegends.com/cdn/9.6.1/img/champion/'+key+'.png',
                    visible: true,
                }
            );
        }
    }

    return data;
};

export const mw = store => next => action => {
    console.log("mw");
    if(action.type === Type.GET_CHAMPS)
    {
        fetch('https://ddragon.leagueoflegends.com/cdn/9.6.1/data/en_US/champion.json')
        .then(res => res.json())
        .then(response => {
            let parsedData = parseData(response.data);

            store.dispatch({
                type: Type.SET_CHAMPS,
                data: parsedData
            });
        })
        .catch(error => console.log(error));
            
        //     store.dispatch(
        //     {
        //         type: Type.GET_CHAMPS_ERROR,
        //         data: error,
        //     }
        // ));
    }

    next(action);
}