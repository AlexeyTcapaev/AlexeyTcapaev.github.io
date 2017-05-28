(function($) {
      
    var defaults = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: 'is-sticky',
            wrapperClassName: 'sticky-wrapper'
        },
        $window = $(window),
        $document = $(document),
        sticked = [],
        windowHeight = $window.height(),
        scroller = function() {
            var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
            for (var i = 0; i < sticked.length; i++) {
                var s = sticked[i],
                    elementTop = s.stickyWrapper.offset().top,
                    etse = elementTop - s.topSpacing - extra;
                if (scrollTop <= etse) {
                    if (s.currentTop !== null) {
                        s.stickyElement
                            .css('position', '')
                            .css('top', '')  
                        .css('box-shadow','')
                        .css('background-color','')
                            .removeClass(s.className);
                        if(document.documentElement.clientWidth<=414)
                            {
                                    document.getElementById('m_l').style.display="none";  
                            }
                       document.getElementById('nav_l').style.display='none';
                        s.stickyElement.parent().removeClass(s.className);
                        s.currentTop = null;
                    }
                }
                else {
                    var newTop = documentHeight - s.stickyElement.outerHeight()
                        - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                    if (newTop < 0) {
                        newTop = newTop + s.topSpacing;
                    } else {
                        newTop = s.topSpacing;
                    }
                    if(document.documentElement.clientWidth<=414)
                        {
                             if (s.currentTop != newTop) {
                        s.stickyElement
                            .css('position', 'fixed')
                            .css('top', newTop)
                            .css('background-color','white')
                        .css('box-shadow','0px 9px 21px -9px rgba(0,0,0,0.75)')
                            .addClass(s.className);
                        document.getElementById('m_l').style.display='flex';
                       
                        s.stickyElement.parent().addClass(s.className);
                        s.currentTop = newTop;
                        var images = ['../logo/logo-ilove', '../logo/heart-shape-outline_318-32549.svg', '../logo/logo-lapanorama']; //Ссылки к изображениям
                        var turn = 0;
                        function imgLoad() {
                           if(!images[turn]) return;
                           var a = new Image();
                           a.alt = '';
                           a.src = images[turn];
                           turn++;
                           a.onload = function() 
                           {                   document.getElementById('m_l').appendChild(a);
                           }
                        }
                        imgLoad();
                               document.getElementById('m_l').style.opacity="1";  

                    }
                        }
                    else
                    if (s.currentTop != newTop) {
                        s.stickyElement
                            .css('position', 'fixed')
                            .css('top', newTop)
                            .css('background-color','white')
                        .css('box-shadow','0px 9px 21px -9px rgba(0,0,0,0.75)')
                            .addClass(s.className);
                        document.getElementById('nav_l').style.display='flex';
                       
                        s.stickyElement.parent().addClass(s.className);
                        s.currentTop = newTop;
                        var images = ['../logo/logo-ilove', '../logo/heart-shape-outline_318-32549.svg', '../logo/logo-lapanorama']; //Ссылки к изображениям
                        var turn = 0;
                        function imgLoad() {
                           if(!images[turn]) return;
                           var a = new Image();
                           a.alt = '';
                           a.src = images[turn];
                           turn++;
                           a.onload = function() 
                           {                   document.getElementById('imgall').appendChild(a);
                           }
                        }
                        imgLoad();

                    }
                }
            }
        },
        resizer = function() {
            windowHeight = $window.height();
        },
        methods = {
            init: function(options) {
                var o = $.extend(defaults, options);
                return this.each(function() {
                    var stickyElement = $(this);

                    stickyId = stickyElement.attr('id');
                    wrapper = $('<div></div>')
                        .attr('id', stickyId + '-sticky-wrapper')
                        .addClass(o.wrapperClassName);
                    stickyElement.wrapAll(wrapper);
                    var stickyWrapper = stickyElement.parent();
                    stickyWrapper.css('height', stickyElement.outerHeight());
                    sticked.push({
                        topSpacing: o.topSpacing,
                        bottomSpacing: o.bottomSpacing,
                        stickyElement: stickyElement,
                        currentTop: null,
                        stickyWrapper: stickyWrapper,
                        className: o.className
                    });
                });
            },
            update: scroller
        };

    // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    $.fn.sticky = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };
    $(function() {
        setTimeout(scroller, 0);
    });
})(jQuery);
