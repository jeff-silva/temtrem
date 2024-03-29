<?php return [
  'tables' => [
    'email_sents' => [
      'name' => 'email_sents',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'to' => [
          'Field' => 'to',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'subject' => [
          'Field' => 'subject',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'body' => [
          'Field' => 'body',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'emails' => [
      'name' => 'emails',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'subject' => [
          'Field' => 'subject',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'body' => [
          'Field' => 'body',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'params' => [
          'Field' => 'params',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'migrations' => [
      'name' => 'migrations',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'migration' => [
          'Field' => 'migration',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'batch' => [
          'Field' => 'batch',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'password_resets' => [
      'name' => 'password_resets',
      'fields' => [
        'email' => [
          'Field' => 'email',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'token' => [
          'Field' => 'token',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'settings' => [
      'name' => 'settings',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'value' => [
          'Field' => 'value',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'temtrem_businesses' => [
      'name' => 'temtrem_businesses',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'user_id' => [
          'Field' => 'user_id',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'category_id' => [
          'Field' => 'category_id',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'type' => [
          'Field' => 'type',
          'Type' => 'enum(\'store\',\'service\')',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'nomadic' => [
          'Field' => 'nomadic',
          'Type' => 'int(1)',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'nomadic_lat' => [
          'Field' => 'nomadic_lat',
          'Type' => 'float',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'nomadic_lng' => [
          'Field' => 'nomadic_lng',
          'Type' => 'float',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'content' => [
          'Field' => 'content',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'lat' => [
          'Field' => 'lat',
          'Type' => 'float',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'lng' => [
          'Field' => 'lng',
          'Type' => 'float',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'route' => [
          'Field' => 'route',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'number' => [
          'Field' => 'number',
          'Type' => 'varchar(10)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'complement' => [
          'Field' => 'complement',
          'Type' => 'varchar(50)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'zipcode' => [
          'Field' => 'zipcode',
          'Type' => 'varchar(10)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'district' => [
          'Field' => 'district',
          'Type' => 'varchar(50)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'city' => [
          'Field' => 'city',
          'Type' => 'varchar(50)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'state' => [
          'Field' => 'state',
          'Type' => 'varchar(50)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'st' => [
          'Field' => 'st',
          'Type' => 'varchar(5)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'country' => [
          'Field' => 'country',
          'Type' => 'varchar(50)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'co' => [
          'Field' => 'co',
          'Type' => 'varchar(5)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'temtrem_businesses_items' => [
      'name' => 'temtrem_businesses_items',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'store' => [
          'Field' => 'store',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'temtrem_businesses_posts' => [
      'name' => 'temtrem_businesses_posts',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'business_id' => [
          'Field' => 'business_id',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'title' => [
          'Field' => 'title',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'content' => [
          'Field' => 'content',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'temtrem_categories' => [
      'name' => 'temtrem_categories',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'slug' => [
          'Field' => 'slug',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'NO',
          'Key' => '',
          'Default' => '0',
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'icon' => [
          'Field' => 'icon',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'parent' => [
          'Field' => 'parent',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'user_notifications' => [
      'name' => 'user_notifications',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'user_id' => [
          'Field' => 'user_id',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'title' => [
          'Field' => 'title',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'body' => [
          'Field' => 'body',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'image' => [
          'Field' => 'image',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'url' => [
          'Field' => 'url',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'seen' => [
          'Field' => 'seen',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
    'users' => [
      'name' => 'users',
      'fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Collation' => NULL,
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'NO',
          'Key' => '',
          'Default' => '',
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'email' => [
          'Field' => 'email',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'NO',
          'Key' => '',
          'Default' => '',
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'password' => [
          'Field' => 'password',
          'Type' => 'varchar(255)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'NO',
          'Key' => '',
          'Default' => '',
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'type' => [
          'Field' => 'type',
          'Type' => 'enum(\'admin\',\'user\')',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'email_verified_at' => [
          'Field' => 'email_verified_at',
          'Type' => 'text',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'remember_token' => [
          'Field' => 'remember_token',
          'Type' => 'varchar(100)',
          'Collation' => 'utf8_unicode_ci',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'datetime',
          'Collation' => NULL,
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
          'Privileges' => 'select,insert,update,references',
          'Comment' => '',
        ],
      ],
    ],
  ],
  'fks' => [
    0 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'email_sents',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
    1 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'emails',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
    2 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'migrations',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
    3 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'settings',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
    4 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'temtrem_businesses',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
    5 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'FK_temtrem_businesses_temtrem_categories',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'temtrem_businesses',
      'COLUMN_NAME' => 'category_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'laravel_test',
      'REFERENCED_TABLE_NAME' => 'temtrem_categories',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    6 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'FK_temtrem_negocio_users',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'temtrem_businesses',
      'COLUMN_NAME' => 'user_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'laravel_test',
      'REFERENCED_TABLE_NAME' => 'users',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    7 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'temtrem_businesses_items',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
    8 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'FK_temtrem_businesses_items_users',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'temtrem_businesses_items',
      'COLUMN_NAME' => 'store',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'laravel_test',
      'REFERENCED_TABLE_NAME' => 'users',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    9 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'temtrem_businesses_posts',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
    10 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'FK_temtrem_businesses_posts_temtrem_businesses',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'temtrem_businesses_posts',
      'COLUMN_NAME' => 'business_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'laravel_test',
      'REFERENCED_TABLE_NAME' => 'temtrem_businesses',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    11 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'temtrem_categories',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
    12 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'FK_temtrem_categories_temtrem_categories',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'temtrem_categories',
      'COLUMN_NAME' => 'parent',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'laravel_test',
      'REFERENCED_TABLE_NAME' => 'temtrem_categories',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    13 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'user_notifications',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
    14 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'notification_user',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'user_notifications',
      'COLUMN_NAME' => 'user_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'laravel_test',
      'REFERENCED_TABLE_NAME' => 'users',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    15 => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'laravel_test',
      'CONSTRAINT_NAME' => 'PRIMARY',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'laravel_test',
      'TABLE_NAME' => 'users',
      'COLUMN_NAME' => 'id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => NULL,
      'REFERENCED_TABLE_SCHEMA' => NULL,
      'REFERENCED_TABLE_NAME' => NULL,
      'REFERENCED_COLUMN_NAME' => NULL,
    ],
  ],
];