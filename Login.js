const handleLogin = async () => {
    console.log(phoneNumber + ' Button was pressed');
    Alert.alert('Hello ' + phoneNumber);
    const sendTextResponse = await fetch(
      'https://dev.stedi.me/twofactorlogin/' + phoneNumber,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/text',
        },
      }
    );
    const sendTextResponseData = await sendTextResponse.text();
    if (sendTextResponse.status !== 200) {
      await Alert.alert('Did you type your number correctly? ' + phoneNumber);
    } else {
      setLoggedInState(loggedInStates.LOGGING_IN);
    }
  };
  