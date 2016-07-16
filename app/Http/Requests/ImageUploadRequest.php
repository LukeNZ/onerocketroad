<?php

namespace OneRocketRoad\Http\Requests;

use OneRocketRoad\Http\Requests\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class ImageUploadRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'file' => ['required', 'file', 'image', 'max:32768', 'mimes:jpg,jpeg,png,gif'],
            'summary' => ['required', 'string'],
            'attribution' => ['required', 'string']
        ];
    }

    /**
     * Overrides the response methos present in the Illuminate\Http\Foundaiton\FormRequest class.
     * We want to do this because depending on the way the validation failed, we would like to return our own
     * different HTTP status codes.
     *
     * @param array $errors
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function response(array $errors) {
        return new JsonResponse($errors, 422);
    }
}
