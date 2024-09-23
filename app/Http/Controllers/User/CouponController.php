<?php

namespace App\Http\Controllers\User;

use App\Coupon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class CouponController extends Controller
{
    public function index()
    {
        $coupons = Coupon::all();
        return view('coupons.index', compact('coupons'));
    }

    public function create()
    {
        return view('coupons.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|unique:coupons,code',
            'expiry_date' => 'nullable|date',
            'min_amount' => 'required|integer|min:0',
            'discount' => 'required|numeric|min:0',
        ]);

        Coupon::create($request->all());
        return redirect()->route('coupons.index')->with('success', 'Coupon created successfully.');
    }
     
    public function edit(Coupon $coupon)
    {
        return view('coupons.edit', compact('coupon'));
    }

    public function update(Request $request, Coupon $coupon)
    {
        try {
            $request->validate([
                'code' => 'required|unique:coupons,code,' . $coupon->id,
                'expiry_date' => 'nullable|date',
                'min_amount' => 'required|numeric|min:0',
                'discount' => 'required|numeric|min:0',
            ]);
    
            $coupon->update($request->only(['code', 'expiry_date', 'min_amount', 'discount']));
    
            return redirect()->route('coupons.index')->with('success', 'Coupon updated successfully.');
        } catch (\Exception $e) {
            \Log::error('Update coupon error: ' . $e->getMessage());
    
            return redirect()->back()->withErrors(['error' => 'Có lỗi xảy ra khi cập nhật coupon.']);
        }
    }
    


    public function destroy(Coupon $coupon)
    {
        $coupon->delete();
        return redirect()->route('coupons.index')->with('success', 'Coupon deleted successfully.');
    }

    public function getCoupons()
    {
        return response()->json(Coupon::all());
    }

}
