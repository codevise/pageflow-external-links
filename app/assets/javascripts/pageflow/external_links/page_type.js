/*global IScroll*/

pageflow.pageType.register('external_links', _.extend({
  prepareNextPageTimeout: 0,

  enhance: function(pageElement, configuration) {
    var scrollerElement = pageElement.find('.ext-links'),
        that = this,
        innerScroller = pageElement.find('#horizontal_scroller'),
        contentWrapper = pageElement.find('.contentWrapper');

    this.linkScroller = new IScroll(scrollerElement[0], {
      mouseWheel: true,
      bounce: false,
      keyBindings: true,
      scrollX: true,
      scrollY: false,
      probeType: 2,
      eventPassthrough: true
    });

    this.linkScroller.checkDisable = function() {
      that._checkForIScroll(scrollerElement, innerScroller, pageElement.find('.arrow-forward'), pageElement.find('.arrow-back'), pageElement);
    };
    scrollerElement.data('scroller', this.linkScroller);

    that.linkScroller.on('scroll', function() {
      that.linkScroller.checkDisable();
    });

    /* Arrows for Gallery */

    pageElement.find('.arrow-back').on('click', function(e) {
      var nextElement = Math.round((that.linkScroller.x / -260) - (scrollerElement.width() / 260 / 2), 10);
      if (nextElement <= 1) {
        that.linkScroller.scrollTo(0, 0, 500, IScroll.ease.quadratic);
      }
      else {
        that.linkScroller.scrollToElement($(".page.active #horizontal_scroller a")[nextElement], 500, 0, 0, IScroll.ease.quadratic);
      }
      that.linkScroller.checkDisable();
      e.stopPropagation();
      return false;
    });

    pageElement.find('.arrow-forward').on('click', function(e) {
      var nextElement = Math.round((that.linkScroller.x / -260) + (scrollerElement.width() / 260 / 2), 10);
      if (nextElement == innerScroller.find('a').length - 1) {
        that.linkScroller.scrollTo(that.linkScroller.maxScrollX, 0, 500, IScroll.ease.quadratic);
      }
      else {
        that.linkScroller.scrollToElement($(".page.active #horizontal_scroller a")[nextElement]);
      }
      that.linkScroller.checkDisable();
      e.stopPropagation();
      return false;
    });
  },

  resize: function(pageElement, configuration) {
    this.linkScroller.refresh();
    this.linkScroller.checkDisable();
  },

  _checkForIScroll: function(outerElement, innerElement, arrowForward, arrowBack, pageElement) {
    if (pageElement.width() <= 700) {
      this.linkScroller.disable();
    }
    else {
      if (innerElement.width() <= outerElement.width()) {
        this.linkScroller.disable();
        arrowForward.css('display', 'none');
        arrowBack.css('display', 'none');
      }
      else {
        this.linkScroller.enable();
        if (this.linkScroller.x == this.linkScroller.maxScrollX) {
          arrowForward.css('display', 'none');
        }
        else {
          arrowForward.css('display', 'block');
        }
        if (this.linkScroller.x === 0) {
          arrowBack.css('display', 'none');
        }
        else {
          arrowBack.css('display', 'block');
        }
      }
    }
  },

  prepare: function(pageElement, configuration) {
  },

  preload: function(pageElement, configuration) {
    return pageflow.preload.backgroundImage(pageElement.find('.background_image'));
  },

  activating: function(pageElement, configuration) {
    this.linkScroller.refresh();
    this.linkScroller.checkDisable();
  },

  activated: function(pageElement, configuration) {
  },

  deactivating: function(pageElement, configuration) {
  },

  deactivated: function(pageElement, configuration) {
  },

  update: function(pageElement, configuration) {
    pageElement.find('h2 .tagline').text(configuration.get('tagline') || '');
    pageElement.find('h2 .title').text(configuration.get('title') || '');
    pageElement.find('h2 .subtitle').text(configuration.get('subtitle') || '');
    pageElement.find('.contentText p').html(configuration.get('text') || '');

    this.updateCommonPageCssClasses(pageElement, configuration);

    pageElement.find('.shadow').css({
      opacity: configuration.get('gradient_opacity') / 100
    });

    this.linkScroller.refresh();
    this.linkScroller.checkDisable();
  },

  embeddedEditorViews: function() {
    return {
      '.background_image': {
        view: pageflow.BackgroundImageEmbeddedView,
        options: {propertyName: 'background_image_id'}
      },

      '.ext-links': {
        view: pageflow.externalLinks.ListEmbeddedView,
        options: {propertyName: 'linked_external_site_perma_ids'}
      }
    };
  }
}, pageflow.commonPageCssClasses));
