const passport = require('passport')
require('dotenv').config()

const GoogleStrategy = require('passport-google-oauth2').Strategy

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CLIENT_URL,
    passReqToCallback:true
},function(request,accesToken,refreshToken,profile,done){
    // console.log(profile);
    return done(null,profile)
}
))


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

