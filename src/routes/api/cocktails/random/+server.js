import { RAPIDAPI_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

// @ts-ignore
export async function GET({ fetch }) {
    const apiUrl = 'https://the-cocktail-db.p.rapidapi.com/randomselection.php';

    const res = await fetch(apiUrl, {
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    });

    const text = await res.text();
    if (!res.ok) return new Response(text, { status: res.status });

    return json(JSON.parse(text));
}
