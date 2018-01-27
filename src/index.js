import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ig from 'fetch-instagram';
//import { users } from 'fetch-instagram';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

//const instagram = ig({
//  accessToken: '348793580.1677ed0.55236dd57b404872a56ccbd89e127f43',
//});

var accessToken = '348793580.1677ed0.55236dd57b404872a56ccbd89e127f43';
var InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);
//users(options: {
//  accessToken: '348793580.1677ed0.55236dd57b404872a56ccbd89e127f43', // Not needed if used as ig().user()
//  id: '7887gjh', // To specify Instagram user-id
//});

const instagram = instagramAPI.userSelfMedia().then(function (result) {
  //console.log(result.data); // user info
  //console.log(result.limit); // api limit
  //console.log(result.remaining) // api request remaining
  return result.data;
}, function (err) {
  //console.log(err); // error info
  return err;
});



const App = () => (
  <div style={styles}>
    <Hello name="Trees I saw" />
    <p>"If you reveal your secrets to the wind, you should not blame the wind for revealing them to the trees." Khalil Gibran</p>
  </div>
);

render(<App />, document.getElementById('root'));
