import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "../build/server";
import { onRequest as apiHandler } from "./api/software";

export const onRequest = async (context) => {
    const url = new URL(context.request.url);
    if (url.pathname.startsWith('/api/')) {
        return apiHandler(context);
    }
    return createPagesFunctionHandler({ build })(context);
};