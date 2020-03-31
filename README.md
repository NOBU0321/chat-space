## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, add_index: true|
|password|string|null: false|
|name|string|null: false|
## Association
- has_many :groups, through: group_users
- has_many :messages
- has_many :group_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
## Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
## Association
- has_many :users, through: group_users
- has_many :messages
- has_many :group_users

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
## Association
- belongs_to :user
- belongs_to :group
