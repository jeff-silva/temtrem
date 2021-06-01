<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersNotificationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users_notifications', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->bigInteger('user_id')->unsigned()->index('FK_users_notifications_users');
			$table->string('title')->nullable();
			$table->text('body')->nullable();
			$table->text('url')->nullable();
			$table->string('image')->nullable();
			$table->timestamps();
			$table->softDeletes();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users_notifications');
	}

}
