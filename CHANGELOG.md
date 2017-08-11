# CHANGELOG

### Version 1.0.0

2017-08-11

[Compare changes](https://github.com/codevise/pageflow-external-links/compare/0-4-stable...v1.0.0)

##### Breaking Changes

- Page type registration is performed by plugin call now.
  ([#34](https://github.com/codevise/pageflow-external-links/pull/34))

  Ensure you register the plugin in your Pageflow initializer:

        config.plugin(Pageflow::ExternalLinks.plugin)

  Remove manual registration of page type:

        # Delete the following line
        config.page_types.register(Pageflow::ExternalLinks.page_type)

- Require pageflow 12
  ([#33](https://github.com/codevise/pageflow-external-links/pull/33))

##### Minor Changes

- Do not underline scroll arrows in ie
  ([#32](https://github.com/codevise/pageflow-external-links/pull/32))
- Allow to use background video
  ([#31](https://github.com/codevise/pageflow-external-links/pull/31))
- Mention legacy theme in readme
  ([#28](https://github.com/codevise/pageflow-external-links/pull/28))
- Use the current syntax for registering
  ([#26](https://github.com/codevise/pageflow-external-links/pull/26))

See
[0-4-stable branch](https://github.com/codevise/pageflow-external-links/blob/0-4-stable/CHANGELOG.md)
for previous changes.
