# generate-path-ts-4.1
Test project for updating type definitions of generatePath function from react-router

## How to use that

1. Clone this repo 
2. Run `npm install`
3. Clone https://github.com/apieceofbart/DefinitelyTyped along this repo (same parent folder) && npm install as well
4. Run `build-with-ts-4-1` - observe there's a typescript error that is expected
5. Run `build-with-ts-3-1` - observe no error - also exptected (since for ts < 4.1 other type definitions should be used)
6. Run `build-with-ts-3-0` - observe error - why? :shrug:
