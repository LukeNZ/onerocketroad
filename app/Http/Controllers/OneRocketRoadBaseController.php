<?php


namespace OneRocketRoad\Http\Controllers;


class OneRocketRoadBaseController extends Controller {


    /**
     * Returns 200 OK.
     *
     * @param null $resource    An optional resource to return.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function ok($resource = null) {
        return response()->json($resource, 200);
    }

    /**
     * Returns 204 No Content.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function noContent() {
        return response()->json(null, 204);
    }

    /**
     * Returns 404 Not Found.
     *
     * @param null $resource
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function notFound($resource = null) {
        return response()->json($resource, 404);
    }

    /**
     * Returns 422 Unprocessable Entity.
     *
     * @param null $resource    An optional resource to return.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function unprocessableEntity($resource = null) {
        return response()->json($resource, 422);
    }
}