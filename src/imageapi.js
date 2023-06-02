import { createClient } from 'pexels';

export const searchImage = async (enteringquery) => {
    const client = createClient('dji2jqJU7LTRCE9ycBHT1E0mFx3DstTK48yTrp5PyTBQMIljakaUYjHa');
    const query = enteringquery;
    const log = await client.photos.search({query, per_page: 1 });
    //console.log(log.photos[0].src.original);
    return log.photos[0].src.medium;
};