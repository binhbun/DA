<?php

namespace App\Core\User;

interface IUserService
{
    public function registerUser($user);
    public function registerWithGoogle($user);
}
