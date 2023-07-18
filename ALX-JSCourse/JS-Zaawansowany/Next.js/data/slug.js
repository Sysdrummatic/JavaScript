function createSlug(text) {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, "") // remove non-word chars, exclude _, - and space, i.e. [^a-zA-Z0-9_ ]
        .replace(/ +/g, "-"); // replace space by dash
}

const slug = createSlug("Hello world!");
console.log(slug); // you can use slugify for url slug, npm install slugify.
