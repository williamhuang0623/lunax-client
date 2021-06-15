import qs from 'qs';

export function formatQueryParams(params) {
    if (!params || typeof params !== 'object' || !isObjectFilled(params)) return '';

    const queryStr = qs.stringify(params, { indices: false });
    return queryStr;
}

export function cookieObjToStr(cookieObj) {
    let cookies = [];
    for (let c in cookieObj) {
        let val = c + '=' + cookieObj[c];
        cookies.push(val);
    }
    return cookies.join('; ') || '';
}

export function isObjectFilled(obj) {
    return Object.keys(obj).length > 0;
}
