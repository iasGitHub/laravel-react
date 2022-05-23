<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Idee extends Model
{
    use HasFactory;
    protected $table = 'idees';
    protected $fillable = [
        'titre',
        'description',
        'etat',
    ];
    
}