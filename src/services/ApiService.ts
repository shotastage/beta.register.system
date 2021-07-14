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
}

export default ApiService;
