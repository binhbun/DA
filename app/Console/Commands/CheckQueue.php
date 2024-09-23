<?php

namespace App\Console\Commands;

use App\Models\Mongo\UserLog;
use Illuminate\Console\Command;

class CheckQueue extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cm:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $a = '{"webhook":"{\"code\":\"00\",\"desc\":\"success\",\"success\":true,\"data\":{\"accountNumber\":\"0965870531\",\"amount\":2000,\"description\":\"TTDFZ8C5  Thanh toan don hang\",\"reference\":\"FT24004658406690\",\"transactionDateTime\":\"2024-01-04 19:02:08\",\"virtualAccountNumber\":\"\",\"counterAccountBankId\":\"\",\"counterAccountBankName\":\"\",\"counterAccountName\":\"\",\"counterAccountNumber\":\"\",\"virtualAccountName\":\"\",\"orderCode\":160982,\"paymentLinkId\":\"0706edbb1aa446698d41663d4dfbb0d6\",\"code\":\"00\",\"desc\":\"success\"},\"signature\":\"42894a39799781ac17566b3c25312236867ed12059f5a57b21462475214cdf50\"}"}';
        dd(json_decode($a, true));
    }
}
