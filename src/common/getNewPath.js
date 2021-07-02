import UrlPattern from 'url-pattern'

export default function getNewPath(route, params) {
    const pattern = new UrlPattern(route)
    return pattern.stringify(params)
}