<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AppTest extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Testes de aplicação';

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
        $puppeteer = new \Nesk\Puphpeteer\Puppeteer(['headless'=>false]);
        $browser = $puppeteer->launch();
        $page = $browser->newPage();
        $page->goto('https://google.com');
        $shot = $page->screenshot(['path' => 'public/shot.png']);
        $browser->close();

        dump($shot, gettype($shot));
        $this->comment('Aaa');
    }
}
