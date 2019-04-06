import * as Type from '../Types';

// export const filter = text => ({
//     type: Type.FILTER_CHAMPS,
//     text
// });

// export const setData = data => ({
//     type: Type.SET_CHAMPS,
//     data
// });

const parseData = (rawData) => {
    let data = [];

    for (const key in rawData) {
        if (rawData.hasOwnProperty(key)) {
            data.push(
                {
                    name: key,
                    image_url: 'https://ddragon.leagueoflegends.com/cdn/9.6.1/img/champion/'+key+'.png'
                }
            );
        }
    }

    return data;
};

export const getChamps = (dispatch) => 
{
    fetch('https://ddragon.leagueoflegends.com/cdn/9.6.1/data/en_US/champion.json')
        .then(res => res.json())
        .then(response => {
            let parsedData = parseData(response.data);
            dispatch({
                type: Type.SET_CHAMPS,
                data: parsedData
            });
        })
        .catch(error => console.error('Error:', error));
};

export const filter = (text) => {
    return {
        type: Type.FILTER_CHAMPS,
        text
    };
}