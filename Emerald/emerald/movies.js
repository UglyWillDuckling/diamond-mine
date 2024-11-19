const notice = e => new Notice(e, 5e3),
    log = e => console.log(e),
    API_KEY_OPTION = "OMDb API Key",
    API_URL = "http://www.omdbapi.com/",
    IMDB_BASE_URL = "https://www.imdb.com/title/";

let QuickAdd, Settings;

async function start(e, t) {
    QuickAdd = e, Settings = t;
    const i = await QuickAdd.quickAddApi.inputPrompt("Enter movie title or IMDB ID: ");
    if (!i) throw notice("No query entered."), new Error("No query entered.");

    let n;

    if (isImdbId(i)) n = await getByImdbId(i);
    else {
        const e = await getByQuery(i), t = await QuickAdd.quickAddApi.suggester(e.map(formatTitleForSuggestion), e);
        if (!t) throw notice("No choice selected."), new Error("No choice selected.");
        n = await getByImdbId(t.imdbID)
    }

    console.error(n)
    QuickAdd.variables = {
        ...n,
        imdbUrl: IMDB_BASE_URL + n.imdbID,
        Released: formatDateString(n.Released)
        , actorLinks: linkifyList(n.Actors.split(","))
        , genreLinks: linkifyList(n.Genre.split(","))
        , directorLink: linkifyList(n.Director.split(","))
        , fileName: replaceIllegalFileNameCharactersInString(n.Title)
        , typeLink: `[[${"movie" === n.Type ? "Movies" : "Series"}]]`
        , languageLower: n.Language.toLowerCase()
    }
}

function isImdbId(e) { return /^tt\d+$/.test(e) }

function formatTitleForSuggestion(e) { return `(${"movie" === e.Type ? "M" : "TV"}) ${e.Title} (${e.Year})` }

function formatDateString(e) {
    const [t, i, n] = e.split(" "),
        r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(i),
        a = new Date(n, r, t);
    return `${a.getFullYear()}-${String(a.getMonth() + 1).padStart(2, "0")}-${String(a.getDate()).padStart(2, "0")}`
}

async function getByQuery(e) {
    const t = await apiGet(API_URL, { s: e });
    if (!t.Search || !t.Search.length) throw notice("No results found."), new Error("No results found.");
    return t.Search
}

async function getByImdbId(e) {
    const t = await apiGet(API_URL, { i: e });
    if (!t) throw notice("No results found."), new Error("No results found.");
    return t
}

function linkifyList(e) {
    return 0 === e.length ? "" : 1 === e.length ? `\n  - [[${e[0]}]]` : e.map((e => `\n  - [[${e.trim()}]]`)).join("")
}

function replaceIllegalFileNameCharactersInString(e) { return e.replace(/[\\,#%&\{\}\/*<>$\'\":@]*/g, "") }

async function apiGet(e, t) {
    let i = new URL(e);

    t && Object.keys(t).forEach((e => i.searchParams.append(e, t[e]))), i.searchParams.append("apikey", Settings["OMDb API Key"]);

    console.log(i.href)

    const n = await request({ url: i.href, method: "GET", cache: "no-cache", headers: { "Content-Type": "application/json" } });

    return JSON.parse(n)
}

module.exports = {
    entry: start,
    settings: {
        name: "Movie Script"
        , author: "Christian B. B. Houmann"
        , options: {
            "OMDb API Key": {
                type: "text"
                , defaultValue: "fa74e20c"
                , placeholder: "OMDb API Key"
            }
        }
    }
};


