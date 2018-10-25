'use strict';
module.exports = (db, { STRING, TEXT, DATE }) => {
  const NewsItem = db.define(
    'NewsItem',
    {
      title: {
        type: STRING,
        allowNull: false
      },
      content: {
        type: TEXT
      },
      spoiler: {
        type: TEXT,
        allowNull: false
      },
      coverImage: {
        type: STRING,
        allowNull: false
      },
      spoilerImage: {
        type: STRING,
      },
      publishedAt: {
        allowNull: false,
        type: DATE
      }
    },
    {
      tableName: 'news',
      timestamps: false
    }
  );
  NewsItem.associate = function(models) {
    // associations can be defined here
  };
  return NewsItem;
};