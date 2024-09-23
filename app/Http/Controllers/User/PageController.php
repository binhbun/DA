<?php

namespace App\Http\Controllers\User;

use App\Core\Page\IPageService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PageController extends Controller
{
    private $pageService;
    public function __construct(IPageService $service)
    {
        $this->pageService = $service;
    }

    public function addPage(Request $request): \Illuminate\Http\RedirectResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'start-date' => 'required|date',
                'end-date' => 'required|date|after_or_equal:start-date',
            ]);
            if ($validator->fails()) {
                throw new \Exception('Ngày hết hạn không hợp lệ');
            }
            $data = $request->all();
            $this->pageService->createPage($data);
            return redirect()->back()->with(['alert-success' => "Thành công."]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['alert-warning' => $e->getMessage()]);
        }

    }

    public function editPage(Request $q): \Illuminate\Http\RedirectResponse
    {
        try {
            $validator = Validator::make($q->all(), [
                'start-date' => 'required|date',
                'end-date' => 'required|date|after_or_equal:start-date',
            ]);
            if ($validator->fails()) {
                throw new \Exception('Ngày hết hạn không hợp lệ');
            }
            $data = $q->all();
            $this->pageService->editPage($data);
            return redirect()->back()->with(['alert-success' => "Thành công."]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['alert-warning' => $e->getMessage()]);
        }
    }

    public function sortPage(Request $q)
    {
        $data = $q->input('data', []);
        return $this->pageService->sortPage($data);
    }
}
