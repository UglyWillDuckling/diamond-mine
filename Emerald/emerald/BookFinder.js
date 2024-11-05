const notice = e => new Notice(e, 5e3), log = e => console.log(e),
    GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes"
// GOOGLE_BOOKS_TITLE_TERM = "intitle:";

function filterIllegalChars(e) {
    return e.replace(/[\\, # %&\{ \ }\/*<>?$\'\":@]*/g, "")
}

module.exports = async function (QuickAdd) {
    // NOTE: will use the clipboard as the default Book title
    let t = await QuickAdd.quickAddApi.utility.getClipboard();

    const i = await QuickAdd.quickAddApi.inputPrompt("Enter Book title: ", t, t);
    if (!i) throw new Notice("No title entered.", 5e3), new Error("No title entered.");

    const o = encodeURIComponent("intitle:" + i),
        l = GOOGLE_BOOKS_API_URL + "?q=" + o + "&maxResults=2",
        n = await fetch(l),
        a = await n.json(); QuickAdd.variables = {
            ...a.items[0],
            title: a.items[0].volumeInfo.title,
            authors: a.items[0].volumeInfo.authors,
            categories: a.items[0].volumeInfo.categories,
            description: a.items[0].volumeInfo.description,
            fileName: filterIllegalChars(a.items[0].volumeInfo.title),
            Poster: a.items[0].volumeInfo.imageLinks.smallThumbnail,
            publishedDate: a.items[0].volumeInfo.publishedDate,
            searchInfo: a.items[0].searchInfo.textSnippet,
            previewLink: a.items[0].volumeInfo.previewLink,
            subtitle: a.items[0].volumeInfo.subtitle,
        }
};
