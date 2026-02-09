import { RAPIDAPI_KEY } from '$env/static/private';

// @ts-ignore
export const load = async ({ fetch }) => {
    const url = 'https://the-cocktail-db.p.rapidapi.com/popular.php';

    const res = await fetch(url, {
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    });

    const text = await res.text();

    if (!res.ok) {
        // This will show you the real RapidAPI error message in your server logs
        console.error('RapidAPI error:', res.status, text);
        return { cocktails: [] };
    }

    const data = JSON.parse(text);
    return { cocktails: data?.drinks ?? [] };
};
