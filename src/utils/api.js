import PropTypes from 'prop-types';
import queryString from 'query-string';

export async function get(url, headers) {
    const parsedHeaders = headers ? `/?${queryString.stringify(headers)}` : '';
    try {
        let data = await fetch(`${url}${parsedHeaders}`);
        return await data.json();
    } catch(e) {
        console.log(e);
        return e;
    }
}

get.propTypes = {
    url: PropTypes.string.isRequired,
    headers: PropTypes.object,
}

get.defaultProps = {
    headers: null,
}