class Entry {
    find;
    replacement;
    constructor(find, replacement) {
        this.find = find;
        this.replacement = replacement;
    }
    match(filePath) {
        if (typeof this.find === "string") {
            return filePath.startsWith(this.find);
        }
        else {
            return this.find.test(filePath);
        }
    }
    replace(filePath) {
        return filePath.replace(this.find, this.replacement) + ".js";
    }
}

function normalizeEntries(enties) {
    if (Array.isArray(enties)) {
        return enties.map(({ find, replacement }) => {
            return new Entry(find, replacement);
        });
    }
    else {
        return Object.keys(enties).map((key) => {
            return new Entry(key, enties[key]);
        });
    }
}

function alias(options) {
    const entries = normalizeEntries(options.entries);
    return {
        name: "alias",
        resolveId(source, importer) {
            const entry = entries.find((e) => {
                return e.match(source);
            });
            if (!entry)
                return source;
            return entry.replace(source);
        },
    };
}

export { alias };
