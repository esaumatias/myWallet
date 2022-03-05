export const requestMoney = async () => {
  const URL = `https://economia.awesomeapi.com.br/json/all`;
  try {
    const response = await fetch(URL);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};