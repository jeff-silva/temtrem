<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AppHash extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:hash';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Retorna uma senha criptografada';

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
        if ($pass = $this->ask('Informe uma senha')) {
            $this->comment('Senha gerada:');
            $this->comment(\Hash::make($pass));
        }
    }
}
