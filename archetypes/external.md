---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
showDate: true
showTags: true
date: {{ .Date }}
externalUrl: ""
summary: ""
showReadingTime: false
_build:
  render: "false"
  list: "local"
---
