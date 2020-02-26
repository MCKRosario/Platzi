class Router {

    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }



    _loadRoute(...urlSegs){

        const mathedRoute = this._matchUrlToRoute(urlSegs);

        const url = `/url${urlSegs.join('/')}`;
        history.pushState({},'this works', url);

        const routerOutElm = document.querySelectorAll('[data-router]')[0];
        routerOutElm.innerHTML = mathedRoute.template;
    }


    _matchUrlToRoute(urlSegs){
        const mathedRouteee = this.routes.find(route => {
            const routePathSegs = route.path.split('/').slice(1)

                if (routePathSegs.length !== urlSegs.length){
                    return false;
                }

                return routePathSegs
                    .every((routePathSeg, i)=> routePathSeg === urlSegs[i]);
        });

        return mathedRoute;

        
    }



    _loadInitialRoute() {

        const pathNameSplit = window.location.pathname.split('/');
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1): '';

        this.loadRoute(...pathSegs);

    }
}