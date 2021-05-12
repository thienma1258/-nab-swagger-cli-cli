# Entities

## ER Model

```mermaid
  erDiagram
    CHAPTER ||--|{ CHAPTER_REVISION : has
    CHAPTER ||--o{ CHAPTER_FILE : has
    CHAPTER_FILE ||--|{ CHAPTER_FILE_REVISION : has
    CHAPTER_REVISION ||--o{ CHAPTER_FILE_REVISION : has
```
