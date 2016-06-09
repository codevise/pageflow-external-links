# CHANGELOG

### Changes on `master`

[Compare changes](https://github.com/codevise/pageflow-external-links/compare/v0.4.0...master)

None so far.

### Version 0.4.0

2016-06-09

[Compare changes](https://github.com/codevise/pageflow-external-links/compare/v0.3.0...v0.4.0)

##### Breaking Changes

- There is now a configurable default theme.
  ([#24](https://github.com/codevise/pageflow-external-links/pull/24),
   [#21](https://github.com/codevise/pageflow-external-links/pull/21),
   [#20](https://github.com/codevise/pageflow-external-links/pull/20),
   [#25](https://github.com/codevise/pageflow-external-links/pull/25))

  If you only use `pageflow/themes/default.scss` in your application,
  simply add the following line:

        @import "pageflow/external_links/themes/default";

  See the link in the readme, for a complete list of theme settings.

  In case you created a custom theme for this page type, add the
  following line to the top of your theme stylesheet:

        @import "pageflow/external_links/themes/legacy";

  This ensures that all styles that have been moved to the new default
  theme from `pageflow/external_links.scss` are still present inside
  the custom theme.

##### Other Changes

- Flexible height for link boxes
  ([#18](https://github.com/codevise/pageflow-external-links/pull/18))
- Disable links inside link description
  ([#23](https://github.com/codevise/pageflow-external-links/pull/23))
- Use translations from `pageflow-public-i18n` gem.
  ([#16](https://github.com/codevise/pageflow-external-links/pull/16),
   [#19](https://github.com/codevise/pageflow-external-links/pull/19))
- Publish sassdoc to github pages via travis.
  ([#22](https://github.com/codevise/pageflow-external-links/pull/22))
- Add .idea entry to .gitignore
  ([#17](https://github.com/codevise/pageflow-external-links/pull/17))

### 0.3.0

2015-10-23

- Site reference input and site selection api.
  ([#15](https://github.com/codevise/pageflow-external-links/pull/15))

### 0.2.0

2015-02-03

- Localization for `en` and `de`.
  ([#10](https://github.com/codevise/pageflow-external-links/pull/10),
   [#12](https://github.com/codevise/pageflow-external-links/pull/12))
- Display message when trying to open links in same tab from the editor.
  ([#7](https://github.com/codevise/pageflow-external-links/pull/7))
- Use text column to allow for long URLs.
  ([#8](https://github.com/codevise/pageflow-external-links/pull/8))
- Prevent nested links from breaking the layout.
  ([#11](https://github.com/codevise/pageflow-external-links/pull/11))
- Add inline help for site thumbnail.
  ([#5](https://github.com/codevise/pageflow-external-links/pull/5))
- Add editor help entry for sites.
  ([#13](https://github.com/codevise/pageflow-external-links/pull/13))
- Add `page_type` factory method.
  ([#4](https://github.com/codevise/pageflow-external-links/pull/4))
- Fix name of javascript assets directory.
  ([#3](https://github.com/codevise/pageflow-external-links/pull/3))

### 0.1.0

- Use public Pageflow helper to render thumbnails.
  ([#2](https://github.com/codevise/pageflow-external-links/pull/2))
- README typo fixes.
  ([#1](https://github.com/codevise/pageflow-external-links/pull/1))

### 0.0.1

- Initial release
