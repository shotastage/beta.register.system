const XHR = new XMLHttpRequest();

class ApiService {
    post(url: string, data: { [key: string]: any; }) {
        XHR.open("POST", url);
        XHR.setRequestHeader("Content-Type", "application/json");
        XHR.send(JSON.stringify(data));
    }
}

export default ApiService;
