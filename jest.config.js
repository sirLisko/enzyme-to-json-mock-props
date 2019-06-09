module.exports = {
  roots: ["<rootDir>/test"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
