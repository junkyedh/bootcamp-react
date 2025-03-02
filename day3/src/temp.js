export const libLazy = (callback) => {
  import("./logHelper").then(callback);
};
