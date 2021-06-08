<?php 

/*
 * Gerado em 08/06/2021 às 05:37:10
 * Por favor, não altere manualmente.
 */

return [
  'tables' => [
    'emails' => [
      'Name' => 'emails',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 0,
      'Avg_row_length' => 0,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => NULL,
      'Create_time' => '2021-06-01 01:56:31',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => '',
        ],
        'from' => [
          'Field' => 'from',
          'Type' => 'varchar(500)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'to' => [
          'Field' => 'to',
          'Type' => 'varchar(500)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'subject' => [
          'Field' => 'subject',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'body' => [
          'Field' => 'body',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'failed_jobs' => [
      'Name' => 'failed_jobs',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 0,
      'Avg_row_length' => 0,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 1,
      'Create_time' => '2021-06-01 01:56:31',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'uuid' => [
          'Field' => 'uuid',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'connection' => [
          'Field' => 'connection',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'queue' => [
          'Field' => 'queue',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'payload' => [
          'Field' => 'payload',
          'Type' => 'longtext',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'exception' => [
          'Field' => 'exception',
          'Type' => 'longtext',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'failed_at' => [
          'Field' => 'failed_at',
          'Type' => 'timestamp',
          'Null' => 'NO',
          'Key' => '',
          'Default' => 'CURRENT_TIMESTAMP',
          'Extra' => '',
        ],
      ],
    ],
    'migrations' => [
      'Name' => 'migrations',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 7,
      'Avg_row_length' => 2340,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 8,
      'Create_time' => '2021-06-01 01:56:30',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(10) unsigned',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'migration' => [
          'Field' => 'migration',
          'Type' => 'varchar(255)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'batch' => [
          'Field' => 'batch',
          'Type' => 'int(11)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'password_resets' => [
      'Name' => 'password_resets',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 0,
      'Avg_row_length' => 0,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => NULL,
      'Create_time' => '2021-06-01 01:56:31',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'email' => [
          'Field' => 'email',
          'Type' => 'varchar(255)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'token' => [
          'Field' => 'token',
          'Type' => 'varchar(255)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'settings' => [
      'Name' => 'settings',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 0,
      'Avg_row_length' => 0,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 1,
      'Create_time' => '2021-06-01 01:56:31',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => '0',
          'Extra' => '',
        ],
        'value' => [
          'Field' => 'value',
          'Type' => 'text',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'temtrem_businesses' => [
      'Name' => 'temtrem_businesses',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 4,
      'Avg_row_length' => 16384,
      'Data_length' => 65536,
      'Max_data_length' => 0,
      'Index_length' => 32768,
      'Data_free' => 0,
      'Auto_increment' => 5,
      'Create_time' => '2021-06-08 02:27:33',
      'Update_time' => '2021-06-08 02:30:38',
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'user_id' => [
          'Field' => 'user_id',
          'Type' => 'bigint(20) unsigned',
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
        ],
        'category_id' => [
          'Field' => 'category_id',
          'Type' => 'int(11)',
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
        ],
        'slug' => [
          'Field' => 'slug',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'description' => [
          'Field' => 'description',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'whatsapp' => [
          'Field' => 'whatsapp',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'cover' => [
          'Field' => 'cover',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'groups' => [
          'Field' => 'groups',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'lat' => [
          'Field' => 'lat',
          'Type' => 'decimal(11,8)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'lng' => [
          'Field' => 'lng',
          'Type' => 'decimal(11,8)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'route' => [
          'Field' => 'route',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'number' => [
          'Field' => 'number',
          'Type' => 'varchar(20)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'complement' => [
          'Field' => 'complement',
          'Type' => 'varchar(50)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'zipcode' => [
          'Field' => 'zipcode',
          'Type' => 'varchar(10)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'district' => [
          'Field' => 'district',
          'Type' => 'varchar(50)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'city' => [
          'Field' => 'city',
          'Type' => 'varchar(20)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'state' => [
          'Field' => 'state',
          'Type' => 'varchar(20)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'state_code' => [
          'Field' => 'state_code',
          'Type' => 'varchar(2)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'country' => [
          'Field' => 'country',
          'Type' => 'varchar(20)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'country_code' => [
          'Field' => 'country_code',
          'Type' => 'varchar(2)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'nomadic' => [
          'Field' => 'nomadic',
          'Type' => 'int(1)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'temtrem_categories' => [
      'Name' => 'temtrem_categories',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 4,
      'Avg_row_length' => 4096,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 5,
      'Create_time' => '2021-06-08 02:33:32',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'description' => [
          'Field' => 'description',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'type' => [
          'Field' => 'type',
          'Type' => 'enum(\'product\',\'service\')',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'color' => [
          'Field' => 'color',
          'Type' => 'varchar(10)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'icon' => [
          'Field' => 'icon',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'temtrem_products' => [
      'Name' => 'temtrem_products',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 12,
      'Avg_row_length' => 1365,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 16384,
      'Data_free' => 0,
      'Auto_increment' => 13,
      'Create_time' => '2021-06-08 01:37:04',
      'Update_time' => '2021-06-08 01:48:02',
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'business_id' => [
          'Field' => 'business_id',
          'Type' => 'int(11)',
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'price' => [
          'Field' => 'price',
          'Type' => 'decimal(10,2)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'unity' => [
          'Field' => 'unity',
          'Type' => 'varchar(50)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'cover' => [
          'Field' => 'cover',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'users' => [
      'Name' => 'users',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 3,
      'Avg_row_length' => 5461,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 4,
      'Create_time' => '2021-06-04 23:40:51',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'type' => [
          'Field' => 'type',
          'Type' => 'enum(\'admin\')',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'email' => [
          'Field' => 'email',
          'Type' => 'varchar(255)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'email_verified_at' => [
          'Field' => 'email_verified_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'password' => [
          'Field' => 'password',
          'Type' => 'varchar(255)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'remember_token' => [
          'Field' => 'remember_token',
          'Type' => 'varchar(100)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'users_notifications' => [
      'Name' => 'users_notifications',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 0,
      'Avg_row_length' => 0,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 16384,
      'Data_free' => 0,
      'Auto_increment' => 1,
      'Create_time' => '2021-06-01 01:56:31',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'user_id' => [
          'Field' => 'user_id',
          'Type' => 'bigint(20) unsigned',
          'Null' => 'NO',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
        ],
        'title' => [
          'Field' => 'title',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'body' => [
          'Field' => 'body',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'url' => [
          'Field' => 'url',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'image' => [
          'Field' => 'image',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
  ],
  'fks' => [
    'FK_temtrem_business_users' => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'temtrem',
      'CONSTRAINT_NAME' => 'FK_temtrem_business_users',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'temtrem',
      'TABLE_NAME' => 'temtrem_businesses',
      'COLUMN_NAME' => 'user_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'temtrem',
      'REFERENCED_TABLE_NAME' => 'users',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    'FK_temtrem_businesses_temtrem_categories' => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'temtrem',
      'CONSTRAINT_NAME' => 'FK_temtrem_businesses_temtrem_categories',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'temtrem',
      'TABLE_NAME' => 'temtrem_businesses',
      'COLUMN_NAME' => 'category_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'temtrem',
      'REFERENCED_TABLE_NAME' => 'temtrem_categories',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    'FK_temtrem_products_temtrem_businesses' => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'temtrem',
      'CONSTRAINT_NAME' => 'FK_temtrem_products_temtrem_businesses',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'temtrem',
      'TABLE_NAME' => 'temtrem_products',
      'COLUMN_NAME' => 'business_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'temtrem',
      'REFERENCED_TABLE_NAME' => 'temtrem_businesses',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    'FK_users_notifications_users' => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'temtrem',
      'CONSTRAINT_NAME' => 'FK_users_notifications_users',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'temtrem',
      'TABLE_NAME' => 'users_notifications',
      'COLUMN_NAME' => 'user_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'temtrem',
      'REFERENCED_TABLE_NAME' => 'users',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
  ],
];