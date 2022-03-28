/* This is relevant in browser client

const onLoginSuccess = res => {
    if (res) {
      // Sometime `res.accessToken` is undefined
      // saveUserToken(res.getAuthResponse(true).access_token);  <-- save token
      refreshTokenSetup(res);
    }
  };
  
  //
  // The setup for refreshing token automatically
  //
  // @param res GoogleLoginResponse
  //
  const refreshTokenSetup = res => {
    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600  - 5 * 60) * 1000;
  
    const refreshToken = async () => {
      const newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600  - 5 * 60) * 1000;
  
      // saveUserToken(newAuthRes.access_token);  <-- save new token
  
      // Setup the other timer after the first one
      setTimeout(refreshToken, refreshTiming);
    };
  
    // Setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
  };
  */