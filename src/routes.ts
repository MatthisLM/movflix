import { compile } from "path-to-regexp";

export enum RoutePathName {
    tvShow = "tvShow",
}

export type Routes = {
    [r in RoutePathName]: string;
};

export const routes: Routes = {
    [RoutePathName.tvShow]: "/tvShow",
};

export interface RouteParams {
    [param: string]: string | number;
}

// returns raw react-router string path eg: /user/:id
export const getRawRoute = (path: RoutePathName) => {
    if (!routes[path]) {
        return "/404";
    } else {
        return routes[path];
    }
};

// returns real-world path eg: /user/1337
export const getRoute = (
    path: RoutePathName,
    params?: RouteParams,
    queryParams?: string | string[][] | Record<string, string> | URLSearchParams | undefined,
    anchor?: string
) => {
    let route = getRawRoute(path);
    const compiler = compile(route, { encode: encodeURIComponent });

    try {
        route = compiler(params);
    } catch (error) {
        console.error('...')
    }

    if (queryParams && Object.keys(queryParams).length) {
        const urlQueryParams = new URLSearchParams(queryParams);
        route += `?${urlQueryParams.toString()}`;
    }

    if (anchor) {
        route = `${route}#${anchor}`;
    }

    return route;
};
