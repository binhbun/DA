<?php

namespace App\Core\LinkHandle;

interface ILinkHandleService
{
    public function getLinkByCode($pageId, $linkId, $code);
}
