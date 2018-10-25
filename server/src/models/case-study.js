module.exports = (db, { STRING, TEXT, BOOLEAN }) => {
  const CaseStudy = db.define(
    'CaseStudy',
    {
      title: { type: STRING, allowNull: false },
      logo: { type: STRING, allowNull: false },
      tag: STRING,
      onHomePage: BOOLEAN,
      agents: STRING,
      photo: STRING,
      bannerFilter: STRING,
      videoId: STRING,
      videoPreview: STRING,
      videoBackground: STRING,
      description: TEXT,
      feature: TEXT,
      caseStudy: TEXT,
      engagementDescription: TEXT,
      duration: STRING
    },
    {
      tableName: 'case-studies',
      timestamps: false
    }
  );

  CaseStudy.associate = function(models) {
    CaseStudy.belongsToMany(models.Technology, {
      through: 'technologies_case-studies'
    });
    CaseStudy.belongsToMany(models.Industry, {
      through: 'industries_case-studies'
    });
    CaseStudy.belongsToMany(models.Service, {
      through: 'services_case-studies'
    });
    CaseStudy.belongsToMany(models.Model, {
      through: 'models_case-studies'
    });
    CaseStudy.hasMany(models.Quote, {
      foreignKey: 'caseStudyID'
    });
  };

  return CaseStudy;
};
