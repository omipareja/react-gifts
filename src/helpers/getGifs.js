

    export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=eVI1emM6KtGWciOomzB8KPEVytQvl7dZ&q=${encodeURI(category)}&limit=10`
        const resp = await fetch(url)
        const {data} = await resp.json()

        const gifs = data.map(img => { //convierto la data en otro arreglo mas sencillo de leer
            return{
                id:img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }

        })

        
        return gifs
    }