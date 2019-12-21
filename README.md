# Github issues. Demo mobile application
Mobile app based on Github API v4 (GraphQL) for fetching issue list of defined repostitory.

### Requirements
* node.js (v10.16.2)
* expo-cli
* yarn
* github personal access token

### How to get Github personal access token
1. Open github.com 
2. Go to Settings > Developer settings > Personal access tokens
3. Generate a new one
4. Copy it

### Start Application
1. Clone the repostitory
2. Install node.js
3. Install yarn
4. Install expo-cli
5. Run following command in project directory:
> `yarn install`<br/>
6. In `src/shared/` directory create a new file `constants.ts` and paste your github access token there like this:
```typescript
export const AUTH_TOKEN = 'YOUR_ACCESS_TOKEN';
```
7. Run following command:
> `yarn start`<br/>

### Screenshots
![shot-1600-3](https://user-images.githubusercontent.com/15017363/71305811-40c8d380-23d9-11ea-83a4-51a1080f31e9.png)

### Author
Dima Miro [d.miro.work@gmail.com](mailto:d.miro.work@gmail.com)
