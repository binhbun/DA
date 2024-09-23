<?php

namespace App\Http\Controllers\Admin;

use App\Config;
use App\Http\Controllers\Controller;
use App\Link;
use App\Setting;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class LinkController extends Controller
{

    public function createLink() {
        return view('user.link.create-link');
    }

    public function editLink(Request $request)
    {
        try {
            $data = $request->all();
            $id = intval($data['_idlink']);
            Link::query()->where('id', $id)->update([
                'linkfile' => $data['link-file'],
                'sublink' => $data['sublink'],
                'status' => $data['status']
            ]);
            return redirect()->back()
                ->with(['alert-success' => "Sửa thành công."]);
        }catch (\Exception $e) {
            return redirect()->back()
                ->with(['alert-danger' => "Có lỗi xảy ra vui lòng thử lại."]);
        }


    }
    public function createLinkAjax(Request $request) {
        try {
            $rules = [
                'link-user-file' => 'required|url',
            ];
            if (!empty(trim($request->get('link-user-sublink')))){
                $rules = [
                    'link-user-file' => 'required|url',
                    'link-user-sublink' => 'url'
                ];
            }
            $validator = Validator::make($request->all(), $rules);

            if ($validator->fails()) {
                $dataError = array_values($validator->errors()->toArray());
                return response()->json(['message' => ($dataError[0][0] ?? "Có lỗi xảy ra.")], 422);
            }
            $data = $request->all();
            $dataInsert = [
                'user_id' => intval(\auth()->user()->id),
                'linkfile' => $data['link-user-file'],
                'sublink' => trim($data['link-user-sublink']),
                'title' =>Str::random(5),
                'aliases' => !empty($data['link-user-aliases']) ? str_replace(" ", "", $data['link-user-aliases']) : Str::random(5)
            ];
            $link = Link::query()->create($dataInsert);
            return response()->json(['data' => $link], 200);
        } catch (\Exception $e) {
            return response()->json(['message' =>  "Có lỗi xảy ra hoặc bí danh đã tồn tại vui lòng tạo lại."], 500);
        }

    }
    public function getLinks(Request $request)
    {
        $user_id = \auth()->user()->id;
        $aliases = $request->get('aliases', '');
        $linkQuery = Link::query()->where('user_id',$user_id)->where('type',1);
        if ($aliases) {
            $linkQuery = $linkQuery->where('aliases','like', "%$aliases%");
        }
        $links = $linkQuery->orderByDesc('id')->paginate(10);
        return view('site.link')->with(['links' => $links]);
    }

    public function getLinkAjax(Request $request)
    {
        try {
            $id = $request->get('id') ?? '';
            $link = Link::query()->where('slug', $id)->first();
            if (!empty($link)) {
                return response()->json([
                    'data' => $link
                ]);
            } else {
                throw new \Exception('khong co du lieu');
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }

    }

    public function chart($id) {
        $currentDate = date('Y-m-d');
        $firstDayOfMonth = date('Y-m-01', strtotime($currentDate));
        $lastDayOfMonth = date('Y-m-t', strtotime($currentDate));
        // Truy vấn dữ liệu từ cơ sở dữ liệu
        $results = DB::table('view_of_links')
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('SUM(clicked) as total_click'), DB::raw('SUM(input_coded) as total_input'))
            ->where('link_id', $id)
            ->where('created_at', '>=', $firstDayOfMonth)
            ->where('created_at', '<=', $lastDayOfMonth)
            ->groupBy('created_at')
            ->get();
        // Tạo mảng dữ liệu
        $data = [];
        $expectations = [];
        $actuals = [];
        foreach (range(1, date('t')) as $day) {

            $date = date('Y-m-d', strtotime($firstDayOfMonth . ' +' . ($day - 1) . ' day'));
            $totalClick = 0;
            $totalInput = 0;
            foreach ($results as $result) {
                if ($result->date == $date) {
                    $totalClick = intval($result->total_click);
                    $totalInput = intval($result->total_input);
                    break;
                }
            }
            $expectations[] = $totalClick;
            $actuals[] = $totalInput;
        }
        $expectations = json_encode($expectations);
        $actuals = json_encode($actuals);
        $link = Link::query()->where('id', $id)->first();
        return view('user.link.chart')->with(['expectations' => $expectations,'actuals' => $actuals, 'link' => $link]);
    }

}
