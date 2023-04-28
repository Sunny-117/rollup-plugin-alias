function alias() {
    return {
        name: "alias",
        resolveId(source, importer) {
            console.log(source, importer, "====");
            return source;
        },
    };
}

export { alias };
