const https = require('https');
const API_KEY = 'bf39b4b0930b82622fc2fc24eea4699c';
const BASE_URL_API = 'api.openweathermap.org';
const BASE_URL_API_IP = 'ipapi.co';


let options = {
    hostname: null,
    path: null,
    method: null,
};

exports.current = async function (req, res) {
    let city = null;
    if (req.params.city) {
        city = req.params.city;
    } else {
        city = await getCity();
    }

    let uri = encodeURI('/data/2.5/weather?units=metric&q=' + city + '&appid=' + API_KEY);
    options = {
        hostname: BASE_URL_API,
        path: uri,
        method: 'GET'
    };
    const request = https.request(options, resp => {
        resp.on('data', d => {
            res.send(d.toString());
        })
    });
    request.on('error', error => {
        console.error(error);
    });
    request.end();
};

exports.forecast = async function (req, res) {

    let city = null;
    if (req.params.city) {
        city = req.params.city;
    } else {
        city = await getCity();
    }

    let uri = encodeURI('/data/2.5/forecast?units=metric&q=' + city + '&appid=' + API_KEY);
    options = {
        hostname: BASE_URL_API,
        path: uri,
        method: 'GET'
    };

    const request = https.request(options, resp => {
        resp.on('data', d => {
            res.send(d.toString());
        })
    });
    request.on('error', error => {
        console.error(error);
    });
    request.end();
};

exports.location = async function (req, res) {
    let city = await getCity();
    res.send({city});
};

// wrap a request in an promise
function getCity() {
    return new Promise((resolve, reject) => {
        options = {
            hostname: BASE_URL_API_IP,
            path: '/city/',
            method: 'GET',
        };
        const request = https.request(options, resp => {
            resp.on('data', d => {
                resolve(d.toString());
            })
        });
        request.on('error', error => {
            console.error(error);
        });
        request.end();
    });
}

