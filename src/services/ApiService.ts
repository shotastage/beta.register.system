const XHR = new XMLHttpRequest();

const DefaultHeaders = [
    ["Content-Type", "application/json"]
];

class ApiService {

    get(url: string) {
        XHR.open("GET", url);
        XHR.setRequestHeader("Content-Type", "application/json");
        XHR.send();
    }

    post(url: string, data: { [key: string]: any; }) {
        XHR.open("POST", url);
        XHR.setRequestHeader("Content-Type", "application/json");
        XHR.send(JSON.stringify(data));
    }

    absHTTPRequest(url: string, data: { [key: string]: any; } | undefined): Promise<any> {
        return new Promise((resolve, reject) => {
            XHR.addEventListener('readystatechange', () => {
              if (XHR.readyState !== 4) return;
              if (XHR.status !== 200) reject('error');
              const data = JSON.parse(XHR.responseText);
              resolve(data);
            });
            XHR.open('GET', url);
            XHR.send();
        });
    }
}

export default ApiService;
