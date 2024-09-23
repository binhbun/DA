<?php

namespace App\Console\Commands;

use App\Console\CrawlTable;
use App\Page;
use Goutte\Client;
use Illuminate\Console\Command;

class CrawlData extends Command
{
    protected $signature = 'crawl';

    protected $description = 'Check queue';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $pages = Page::query()->get();
        $client = new Client();
        foreach ($pages as $page) {
            $title = $page->title;
            $title = explode($title, "\n");
            $search = $title[0] ?? "";
            $domain = $page->link_page;
            $search = urlencode($search);
            $url = "https://www.google.com/search?num=100&q={$search}&sourceid=chrome&ie=UTF-8";
            $position = $this->getPo($url, $domain, $client);
            $page->position = $position;
            $page->save();
            sleep(2);
        }

    }

    private function getPo($url, $domain, Client $client): int
    {
        $crawler = $client->request('GET',$url);
        $position = 1;
        $crawler->filter("div.egMi0")->each(function ($node) use ($domain, &$position) {
            $a = $node->filter("a")->attr("href");
            if(str_contains($a, $domain)) {
                return $position;
            }
            $position++;
        });
        return -1;
    }
}
