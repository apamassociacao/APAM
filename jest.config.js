export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
        "^@/(.*)$": "<rootDir>/src/$1",
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/fileTransformer.js',
    },

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.png$",
    ],
};