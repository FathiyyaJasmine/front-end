const BASE_URL = 'YOUR_BASE_URL';

const ENDPOINT = {
  predict: `https://asclepius-804778489236.asia-southeast2.run.app/predict`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const json = await response.json();
    return json;
  }
}
