<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Flavor;
use Illuminate\Support\Facades\DB;
use Storage;
use Illuminate\Http\UploadedFile;

class FlavorsearchController extends Controller
{
    public function index(){
        $flavors = Flavor::all();
        return respone()->json(['flavors' => $flavors]);
    }
}


