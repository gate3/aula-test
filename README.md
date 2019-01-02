# Music Player Backend (Aula Interview)

Music Player is the backend for a music player that can store your songs and also automatically fetch the metadata for the songs. You can also fetch all songs including the metadata. Isn't that fun :-).

## Installation

First clone the repo by using

```bash
git clone https://github.com/gate3/aula-test.git
```
Then point your terminal into the folder by 

```bash
cd aula-test
```
Install package dependencies

```bash
npm i or npm install
```
Once that is done, you can now run 

```bash
node server.js or npm start
```
The app should be running now. You are good to go. 

## Usage

The backend currently has three functionalities
- Store a new song
- Fetch all songs (including metadata)
- Fetch a specific song (also including metadata)

### New Song

Send a POST request to 

``` bash
<site-url>/v1/music/
```

> Where <site-url> is the url (including port if applicable) that the backend is running on. 


### Fetch All Songs

Send a GET request to

```bash
<site-url>/v1/music/
```

### Fetch Specific Song by Id

Send a GET request to

```bash
<site-url>/v1/music/:id
```
> Where id is the _id that comes with the song you wish to fetch

## What is this built with

- Nodejs & Es6
- ExpressJs
- LowDb (As a localDB)
- Multer (For File Uploads)
- Music-MetaData
- Mocha, Chai and Sinon

## Todo
There is still a lot to do to make this the finished article

- Change Db To MongoDb
- Fetch MetaData from an api 
- Cache MetaData using Redis
- Use storage API like Azure Blob, S3 or Dropbox for storing songs
- Include a delete song endpoint
- Paginate songs
- Make sure the tests run properly 
- Make a helper for returning success or failure response so code can stay dry
- Use a crypto function for forming filename of songs
- Include a docker file for easy deployment


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)