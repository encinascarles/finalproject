import { createClient } from 'pexels';

export const searchImage = async (query) => {
    const client = createClient('dji2jqJU7LTRCE9ycBHT1E0mFx3DstTK48yTrp5PyTBQMIljakaUYjHa');
    const log = await client.photos.search({query, per_page: 1 });
    console.log(log);
    return log.photos[0] ? log.photos[0].src.medium :  null;
};