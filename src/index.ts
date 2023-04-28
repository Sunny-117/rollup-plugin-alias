import { Plugin } from "rollup";
export function alias(): Plugin {
  return {
    name: "alias",
    resolveId(source: string, importer: string | undefined) {
      console.log(source, importer, "====");
      return source;
    },
  };
}
