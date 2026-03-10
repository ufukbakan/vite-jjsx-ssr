export function qs(query: Record<string, string>): string {
    return Object.keys(query).length > 0 
        ? '?' + Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&')
        : '';
}

export function parseUrl(url: string): { path: string; query: Record<string, string> } {
  const argsIndex = url.indexOf('?');
  const queryStr = argsIndex === -1 ? '' : url.slice(argsIndex+1);
  return {
    path: url.slice(0, argsIndex === -1 ? url.length : argsIndex),
    query: queryStr.split('&').reduce((acc, param) => {
      const [key, value] = param.split('=');
      if(!key) return acc;
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>),
  };
}

export function matchRoute(route: string, path: string): Record<string, string> | false {
    const routeParts = route.split('/').filter(p => p);
    const pathParts = path.split('/').filter(p => p);
    if (routeParts.length !== pathParts.length) return false;
    const params: Record<string, string> = {};
    for (let i = 0; i < routeParts.length; i++) {
        const routePart = routeParts[i];
        const pathPart = pathParts[i];
        if (routePart.startsWith(':')) {
            const paramName = routePart.slice(1);
            params[paramName] = pathPart;
        } else if (routePart !== pathPart) {
            return false;
        }
    }
    return params;
}

export function replaceParams(route: string, params: Record<string, string>): string {
    return route.replace(/:(\w+)/g, (match, paramName) => params[paramName] || match);
}
