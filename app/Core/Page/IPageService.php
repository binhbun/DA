<?php

namespace App\Core\Page;

interface IPageService
{
    public function createPage($data);
    public function editPage($data);
    public function updateStatusPage();
    public function sortPage($data);
}
