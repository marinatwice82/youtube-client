import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class SearchInterceptor implements HttpInterceptor {
    private readonly userAPI = environment.TOKEN;
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        console.log("Interceptor ", req.url, ' ', this.userAPI)
        return next.handle(req.clone({ setParams: { key: this.userAPI } }));
    };
}
