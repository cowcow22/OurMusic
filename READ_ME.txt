1. npx create-react-app client
2. bikin folder server kosong (Folder Server diluar Folder Client)

3. NPM INSTALL:
    DI CLIENT (cd client)
    1. npm i bootstrap react-bootstrap
    2. npm i axios
    3. npm i spotify-web-api-node
    4. npm i react-spotify-web-playback

    DI SERVER (cd server)
    1. npm init -y
    2. npm i express spotify-web-api-node
    3. npm i nodemon --save-dev
    4. npm i cors
    5. npm i body-parser

    Sebelum masuk step 7 pastikan sudah mengcopy file .env
    6. npm i dotenv

4. Copy dan paste file useAuth.js dari client milik saya
5. Jangan lupa copy dan paste juga file package.json pada folder server milik saya.


Nyalain server make gitbash terminal dengan directory /server `npm run devStart`
Nyalain website make gitbash terminal dengan directory /client `npm start`

Untuk menggunakan website secara maksimal, diperlukan akun Spotify Premium dan mencantumkan email akun spotify tersebut, 
agar developer dapat memasukkan email tersebut kedalam whitelist. (Ini merupakan ketentuan langsung dari Spotify). 
