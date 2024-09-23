<?php

namespace App\Core\Client\Interfaces;

interface ClientServiceInterface
{
    public function generateCode($dataRes);

    public function checkClientVisit($ip, $id, $linkId);
}
