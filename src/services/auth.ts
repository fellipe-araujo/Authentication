interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "jewnbfj349hf7834hfu8349uf8ojeifj832u89ru3489uirt9i34jpuirn",
        user: {
          name: "Fellipe",
          email: "fellipe@hotmail.com",
        },
      });
    }, 2000);
  });
}
