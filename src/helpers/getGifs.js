export const getGifs = async( categories ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categories ) }&limit=10&api_key=eM3PguG977kPqUNNOw9IKXQuFeVuA3wg`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map((image) => (
        {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url,

        })
    )
    return gifs;
}