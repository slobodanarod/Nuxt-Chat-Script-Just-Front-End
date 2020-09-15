import Vuex from 'vuex';
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({

    state: {
      user: null, authKey: null,
    }, mutations: {
      setUser (state, user)
      {
        state.user = user;
      }, setAuth (state, key)
      {
        state.authKey = key;
      }, clearAuth (state)
      {
        state.authKey = null;
        state.user = null;
      }, setUserImage (state, image)
      {
        state.user.image = image;
      }
    }, actions: {
      nuxtServerInit (vuexContext, context)
      {
        let token;
        if (context.req)
        {
          if (!context.req.headers.cookie)
          {
            console.log("cookie yok");
            return;
          }else{
          token = context.req.headers.cookie.split(";").find(c => c.trim().startsWith("authKey="));
          if (token)
          {
            token = token.split("=")[ 1 ];
          }
        }
        }
        else
        {
          token = localStorage.getItem("authKey");
          if (!token)
          {
            return
          }
        }
        return context.$axios.post("/user/init", { token : token }).then((res) => {
          vuexContext.commit("setUser",res.data.user);
        }).catch(e => {console.log(e)});
      }, registerUser (vuexContext, context)
      {
        vuexContext.commit("setUser", context);
        vuexContext.commit("setAuth", context.token);
        localStorage.setItem("authKey", context.token);
        Cookie.set('authKey', context.token,{ expires: 99999999 });
      }, loginUser (vuexContext, context)
      {
        vuexContext.commit("setUser", context);
        vuexContext.commit("setAuth", context.token);
        localStorage.setItem("authKey", context.token);
        Cookie.set('authKey', context.token,{ expires: 99999999 });
      }, initAuth (vuexContext, req)
      {
        let token;
        if (req)
        {
          if (!req.headers.cookie)
          {
            console.log("cookie yok");
            return;
          }else{
          token = req.headers.cookie.split(";").find(c => c.trim().startsWith("authKey="));
          if (token)
          {
            token = token.split("=")[ 1 ];
          }
        }
        }
        else
        {
          token = localStorage.getItem("authKey");
          if (!token)
          {
            return
          }
        }
        vuexContext.commit("setAuth", token);
      }, logOut (vuexContext)
      {
        localStorage.removeItem("authKey");
        Cookie.remove("authKey");
        vuexContext.commit("clearAuth");
      }, setUserImage (vuexContext, context)
      {
        vuexContext.commit("setUserImage", context);
      }
    }, getters: {
      getUser (state)
      {
        return state.user;
      }, getAuthenticated (state)
      {
        return !!state.authKey;
      }
    }

  })
};

export default createStore;
