export enum PERMISSIONS {
  IS_LS_USER = "is:LSUser",

  // Project
  CREATE_PROJECT = "create:project",

  DELETE_ANY_PROJECT = "delete:anyProject",

  ARCHIVE_ANY_PROJECT = "archive:anyProject",

  VIEW_PROJECT_SETTINGS_INFO = "view:project:settings:info",
  VIEW_ORGANIZATION_ANY_PROJECT_SETTINGS_INFO = "view:organization:anyProject:settings:info",
  VIEW_ANY_PROJECT_SETTINGS_INFO = "view:anyProject:settings:info",

  UPDATE_PROJECT_SETTINGS_INFO = "update:project:settings:info",
  UPDATE_ORGANIZATION_ANY_PROJECT_SETTINGS_INFO = "update:organization:anyProject:settings:info",
  UPDATE_ANY_PROJECT_SETTINGS_INFO = "update:anyProject:settings:info",

  VIEW_PROJECT_SETTINGS_SPELLING_ERRORS = "view:project:settings:spellingErrors",
  VIEW_ORGANIZATION_ANY_PROJECT_SETTINGS_SPELLING_ERRORS = "view:organization:anyProject:settings:spellingErrors",
  VIEW_ANY_PROJECT_SETTINGS_SPELLING_ERRORS = "view:anyProject:settings:spellingErrors",

  UPDATE_PROJECT_SETTINGS_SPELLING_ERRORS = "update:project:settings:spellingErrors",
  UPDATE_ORGANIZATION_ANY_PROJECT_SETTINGS_SPELLING_ERRORS = "update:organization:anyProject:settings:spellingErrors",
  UPDATE_ANY_PROJECT_SETTINGS_SPELLING_ERRORS = "update:anyProject:settings:spellingErrors",

  VIEW_PROJECT_SETTINGS_NOTE = "view:project:settings:note",
  VIEW_ORGANIZATION_ANY_PROJECT_SETTINGS_NOTE = "view:organization:anyProject:settings:note",
  VIEW_ANY_PROJECT_SETTINGS_NOTE = "view:anyProject:settings:note",

  UPDATE_PROJECT_SETTINGS_NOTE = "update:project:settings:note",
  UPDATE_ORGANIZATION_ANY_PROJECT_SETTINGS_NOTE = "update:organization:anyProject:settings:note",
  UPDATE_ANY_PROJECT_SETTINGS_NOTE = "update:anyProject:settings:note",

  VIEW_PROJECT_GLOSSARIES = "view:project:glossaries",
  VIEW_ORGANIZATION_ANY_PROJECT_GLOSSARIES = "view:organization:anyProject:glossaries",
  VIEW_ANY_PROJECT_GLOSSARIES = "view:anyProject:glossaries",

  UPDATE_PROJECT_GLOSSARIES = "update:project:glossaries",
  UPDATE_ORGANIZATION_ANY_PROJECT_GLOSSARIES = "update:organization:anyProject:glossaries",
  UPDATE_ANY_PROJECT_GLOSSARIES = "update:anyProject:glossaries",

  VIEW_PROJECT_RAW_FILES = "view:project:rawFiles",
  VIEW_ORGANIZATION_ANY_PROJECT_RAW_FILES = "view:organization:anyProject:rawFiles",
  VIEW_ANY_PROJECT_RAW_FILES = "view:anyProject:rawFiles",

  UPDATE_PROJECT_RAW_FILES = "update:project:rawFiles",
  UPDATE_ORGANIZATION_ANY_PROJECT_RAW_FILES = "update:organization:anyProject:rawFiles",
  UPDATE_ANY_PROJECT_RAW_FILES = "update:anyProject:rawFiles",

  VIEW_PROJECT_COLLABORATORS = "view:project:collaborators",
  VIEW_ORGANIZATION_ANY_PROJECT_COLLABORATORS = "view:organization:anyProject:collaborators",
  VIEW_ANY_PROJECT_COLLABORATORS = "view:anyProject:collaborators",

  UPDATE_PROJECT_COLLABORATORS = "update:project:collaborators",
  UPDATE_ORGANIZATION_ANY_PROJECT_COLLABORATORS = "update:organization:anyProject:collaborators",
  UPDATE_ANY_PROJECT_COLLABORATORS = "update:anyProject:collaborators",

  VIEW_PROJECT_CHAPTERS = "view:project:chapters",
  VIEW_ORGANIZATION_ANY_PROJECT_CHAPTERS = "view:organization:anyProject:chapters",
  VIEW_ANY_PROJECT_CHAPTERS = "view:anyProject:chapters",

  VIEW_PROJECT_ACTIVITY = "view:project:activity",
  VIEW_ORGANIZATION_ANY_PROJECT_ACTIVITY = "view:organization:anyProject:activity",
  VIEW_ANY_PROJECT_ACTIVITY = "view:anyProject:activity",

  VIEW_PROJECT_EXPORT_BATCHES = "view:project:exportBatches",
  VIEW_ORGANIZATION_PROJECT_EXPORT_BATCHES = "view:organization:anyProject:exportBatches",
  VIEW_ANY_PROJECT_EXPORT_BATCHES = "view:anyProject:exportBatches",

  CREATE_PROJECT_EXPORT_BATCHES = "create:project:exportBatch",
  CREATE_ORGANIZATION_PROJECT_EXPORT_BATCHES = "create:organization:anyProject:exportBatch",
  CREATE_ANY_PROJECT_EXPORT_BATCHES = "create:anyProject:exportBatch",

  DELETE_PROJECT_EXPORT_BATCHES = "delete:project:exportBatches",
  DELETE_ORGANIZATION_PROJECT_EXPORT_BATCHES = "delete:organization:anyProject:exportBatches",
  DELETE_ANY_PROJECT_EXPORT_BATCHES = "delete:anyProject:exportBatches",

  // Chapter
  CREATE_PROJECT_CHAPTER = "create:project:chapter",
  CREATE_ORGANIZATION_ANY_PROJECT_CHAPTER = "create:organization:anyProject:chapter",
  CREATE_ANY_PROJECT_CHAPTER = "create:anyProject:chapter",

  UPDATE_PROJECT_CHAPTER = "update:project:chapter",
  UPDATE_ORGANIZATION_ANY_PROJECT_CHAPTER = "update:organization:anyProject:chapter",
  UPDATE_ANY_PROJECT_CHAPTER = "update:anyProject:chapter",

  DELETE_PROJECT_CHAPTER = "delete:project:chapter",
  DELETE_ORGANIZATION_ANY_PROJECT_CHAPTER = "delete:organization:anyProject:chapter",
  DELETE_ANY_PROJECT_CHAPTER = "delete:anyProject:chapter",

  VIEW_PROJECT_CHAPTER_PAGES = "view:project:chapter:pages",
  VIEW_ORGANIZATION_ANY_PROJECT_CHAPTER_PAGES = "view:organization:anyProject:chapter:pages",
  VIEW_ANY_PROJECT_CHAPTER_PAGES = "view:anyProject:chapter:pages",

  UPDATE_PROJECT_CHAPTER_PAGES = "update:project:chapter:pages",
  UPDATE_ORGANIZATION_ANY_PROJECT_CHAPTER_PAGES = "update:organization:anyProject:chapter:pages",
  UPDATE_ANY_PROJECT_CHAPTER_PAGES = "update:anyProject:chapter:pages",

  VIEW_PROJECT_CHAPTER_COMMENTS = "view:project:chapter:comments",
  VIEW_ORGANIZATION_ANY_PROJECT_CHAPTER_COMMENTS = "view:organization:anyProject:chapter:comments",
  VIEW_ANY_PROJECT_CHAPTER_COMMENTS = "view:anyProject:chapter:comments",

  CREATE_PROJECT_CHAPTER_COMMENTS = "create:project:chapter:comments",
  CREATE_ORGANIZATION_ANY_PROJECT_CHAPTER_COMMENTS = "create:organization:anyProject:chapter:comments",
  CREATE_ANY_PROJECT_CHAPTER_COMMENTS = "create:anyProject:chapter:comments",

  UPDATE_PROJECT_CHAPTER_COMMENTS = "update:project:chapter:comments",
  UPDATE_ORGANIZATION_ANY_PROJECT_CHAPTER_COMMENTS = "update:organization:anyProject:chapter:comments",
  UPDATE_ANY_PROJECT_CHAPTER_COMMENTS = "update:anyProject:chapter:comments",

  DELETE_PROJECT_CHAPTER_COMMENTS = "delete:project:chapter:comments",
  DELETE_ORGANIZATION_ANY_PROJECT_CHAPTER_COMMENTS = "delete:organization:anyProject:chapter:comments",
  DELETE_ANY_PROJECT_CHAPTER_COMMENTS = "delete:anyProject:chapter:comments",

  VIEW_PROJECT_CHAPTER_ACTIVITY = "view:project:chapter:activity",
  VIEW_ORGANIZATION_ANY_PROJECT_CHAPTER_ACTIVITY = "view:organization:anyProject:chapter:activity",
  VIEW_ANY_PROJECT_CHAPTER_ACTIVITY = "view:anyProject:chapter:activity",

  // Glossary
  CREATE_GLOSSARY = "create:glossary",

  VIEW_ANY_GLOSSARY = "view:anyGlossary",

  UPDATE_ANY_GLOSSARY = "update:anyGlossary",

  DELETE_ANY_GLOSSARY = "delete:anyGlossary",

  CREATE_ANY_GLOSSARY_ENTRY = "create:anyGlossary:entry",

  VIEW_ANY_GLOSSARY_ENTRY = "view:anyGlossary:entry",

  UPDATE_ANY_GLOSSARY_ENTRY = "update:anyGlossary:entry",

  DELETE_ANY_GLOSSARY_ENTRY = "delete:anyGlossary:entry",

  //  Visual asset
  CREATE_VISUAL_ASSET = "create:visualAsset",
  VIEW_ANY_VISUAL_ASSET = "view:anyVisualAsset",
  UPDATE_ANY_VISUAL_ASSET = "update:anyVisualAsset",
  DELETE_ANY_VISUAL_ASSET = "delete:anyVisualAsset",
}
