<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Package;
use App\InvoiceMoney;
use App\Coupon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PackageController extends Controller
{
    public function index()
    {
        $packages = Package::all();
        return view('adminlte.packages.index', compact('packages'));
    }

    public function create()
    {
        $coupons = Coupon::all(); // Lấy danh sách mã giảm giá
        return view('adminlte.packages.create', compact('coupons'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'amount' => 'required|numeric|min:1',
            'coupon_code' => 'nullable|string|exists:coupons,code',
        ]);

        $coupon = Coupon::where('code', $request->input('coupon_code'))->first();
        $discount = $coupon ? $coupon->discount : 0;

        Package::create([
            'name' => $request->input('name'),
            'amount' => $request->input('amount'),
            'coupon_code' => $request->input('coupon_code'),
            'discount' => $discount,
        ]);

        return redirect()->route('packages.index')->with('success', 'Package created successfully.');
    }

    public function edit(Package $package)
    {
        $coupons = Coupon::all(); // Lấy danh sách mã giảm giá
        return view('adminlte.packages.edit', compact('package', 'coupons'));
    }

    public function update(Request $request, Package $package)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'amount' => 'required|numeric|min:1',
            'coupon_code' => 'nullable|string|exists:coupons,code',
        ]);

        $coupon = Coupon::where('code', $request->input('coupon_code'))->first();
        $discount = $coupon ? $coupon->discount : 0;

        $package->update([
            'name' => $request->input('name'),
            'amount' => $request->input('amount'),
            'coupon_code' => $request->input('coupon_code'),
            'discount' => $discount,
        ]);

        return redirect()->route('packages.index')->with('success', 'Package updated successfully.');
    }

    public function destroy(Package $package)
    {
        $package->delete();
        return redirect()->route('packages.index')->with('success', 'Package deleted successfully.');
    }

    public function select()
    {
        $packages = Package::all();

        $userId = Auth::user()->id;
        $invoices = InvoiceMoney::query()->where('user_id', $userId)->orderBy('id', 'DESC')->paginate(20);
        return view('user.select-package', compact('packages', 'invoices'));
    }
}
